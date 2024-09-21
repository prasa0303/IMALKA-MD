const { cmd, commands } = require('../command'); 
const ytdl = require('ytdl-core');
const yts = require('yt-search');

cmd({
    pattern: "dsong",
    desc: "To download songs.",
    react: "🎵",
    category: "download",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) return reply("Please provide a URL or title.");

        const search = await yts(q);
        const data = search.videos[0];

        if (!data) return reply("No song found. Please try a different query.");

        const url = data.url;

        let desc = `
HANSAMAL-MD SONG DOWNLOADER

🎵 *Song Found!* 

➥ *Title:* ${data.title} 
➥ *Duration:* ${data.timestamp} 
➥ *Views:* ${data.views} 
➥ *Uploaded On:* ${data.ago} 
➥ *Link:* ${data.url} 

🎧 *Enjoy the music brought to you by* *HANSAMAL BOT*! 

> *Created with ❤️ by IMALKA HANSAMAL* 

> *© HANSAMAL-MD* 
*💻 GitHub:* github.com/cobrs11/HANSAMAL-MD  
`;

        await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });

        // Download audio
        const audioStream = ytdl(url, { quality: 'highestaudio', filter: format => format.hasAudio });

        // Send audio message
        await conn.sendMessage(from, { audio: { url: audioStream }, mimetype: "audio/mpeg" }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`An error occurred: ${e.message || e}`);
    }
});


// Command for downloading videos
cmd({
    pattern: "dvideo",
    desc: "To download videos in 720p.",
    react: "🎥",
    category: "download",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) return reply("Please provide a URL or title.");

        const search = await yts(q);
        const data = search.videos[0];

        if (!data) return reply("No video found. Please try a different query.");

        const url = data.url;

        let desc = `
HANSAMAL-MD VIDEO DOWNLOADER

🎥 *Video Found!* 

➥ *Title:* ${data.title} 
➥ *Duration:* ${data.timestamp} 
➥ *Views:* ${data.views} 
➥ *Uploaded On:* ${data.ago} 
➥ *Link:* ${data.url} 

🎬 *Enjoy the video brought to you by* *HANSAMAL BOT*! 

> *Created with ❤️ by IMALKA HANSAMAL* 

> *© HANSAMAL-MD* 
*💻 GitHub:* github.com/cobrs11/HANSAMAL-MD  
`;

        await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });

        // Download video in 720p
        let videoInfo = await fg.getInfo(url);
        let format = videoInfo.formats.find(f => f quality === '720p' && f.hasAudio && f.hasVideo);

        if (!format) return reply("720p video format not available.");

        // Send video message
        await conn.sendMessage(from, { video: { url: format.url }, mimetype: "video/mp4" }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`An error occurred: ${e.message || e}`);
    }
});
