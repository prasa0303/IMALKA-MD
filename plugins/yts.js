const axios = require('axios');
const { cmd } = require('../command');
const ytdl = require('ytdl-core');
const fs = require('fs');

cmd({
    pattern: "song",
    desc: "🎵 Download a song by name",
    react: "🎵",
    category: "useful",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        const songName = q.trim();
        if (!songName) return reply("❗ Please provide a song name. Usage: .song [song name]");

        // YouTube search API
        const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(songName)}&key=YOUR_YOUTUBE_API_KEY`;
        
        const response = await axios.get(searchUrl);
        const videoId = response.data.items[0]?.id?.videoId;

        if (!videoId) return reply("⚠️ No results found for that song.");

        const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
        const stream = ytdl(videoUrl, { filter: 'audioonly' });
        const filePath = `./downloaded_audio.mp3`;

        stream.pipe(fs.createWriteStream(filePath));

        stream.on('finish', async () => {
            const media = MessageMedia.fromFilePath(filePath);
            await conn.sendMessage(from, media, { caption: `🎶 Here is your song: ${songName}` });
            fs.unlinkSync(filePath); // Clean up after sending
        });

        stream.on('error', () => {
            reply("⚠️ Error downloading the song. Please try again later.");
        });
    } catch (e) {
        console.error(e);
        return reply("⚠️ An error occurred while processing your request.");
    }
});
