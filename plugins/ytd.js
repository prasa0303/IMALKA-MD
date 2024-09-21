const { cmd, commands } = require('../command');
const fg = require('ytdl-core');
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
        let down = await fg.yta(url);
        let downloadUrl = down.dl_url;

        // Send audio message
        await conn.sendMessage(from, { audio: { url: downloadUrl }, mimetype: "audio/mpeg" }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`An error occurred: ${e.message || e}`);
    }
});

//====================video_dl=======================

cmd({
    pattern: "dvideo",
    desc: "To download videos.",
    react: "🎥",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me a url or title")  
const search = await yts(q)
const data = search.videos[0];
const url = data.url
    
    
let desc = `
*HANSAMAL-MD VIDEO DOWNLOADER*

🎥 *Video Found!* 

➥ *Title:* ${data.title} 
➥ *Duration:* ${data.timestamp} 
➥ *Views:* ${data.views} 
➥ *Uploaded On:* ${data.ago} 
➥ *Link:* ${data.url} 

🎬 *Enjoy the video brought to you by* *HANSAMAL_MD*! 

> *Created with ❤️ by IMALKA HANSAMAL* 

> *© HANSAMAL- MD* 
*💻 GitHub:* https://github.com/cobrs11/HANSAMAL-MD/
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download video

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video message
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"*© HANSAMAL-MD*"},{quoted:mek})

}catch(e){
console.log(e)
  reply('${e}')
}
})
