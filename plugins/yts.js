const {cmd , commands} = require('../command')
const fg = require('ytdl-core')
const yts = require('yt-search')
cmd({
    pattern: "song",
    desc: "To download songs.",
    react: "🎵",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
        const info = await ytdl.getInfo(url);
        const format = ytdl.chooseFormat(info.formats, { quality: 'highestaudio' });

        // Here you can stream the audio or save it as a file
        return format.url; // This is the URL to the audio stream
    } catch (error) {
        console.error('Error downloading the song:', error);
    }
};

// Example usage
const url = 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID';
downloadSong(url).then(audioUrl => {
    console.log('Audio URL:', audioUrl);
});
