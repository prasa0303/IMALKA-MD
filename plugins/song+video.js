const {cmd , commands} = require('../command')
const fg = require ( 'api-dylux' )
const yts = require ( 'yt-search' ) 


cmd({
    pattern: "song",
    desc: "download song",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
  if(!q) return reply("PLEASE GIVE ME SONG NAME OR YT URL")
  const search = await yts(q)
  const data = search.videos[0];
  const url = data.url
  let desc = ` 
🎶 HANSAMAL-MD YT SONG DOWNLOADER 🎶

TITLE: ${data.title}
DESCRIPTION: ${data.description}
TIME: ${data.timestamps}
AGO: ${data.ago}
VIEWS: ${data.views}


MADE BY IMALKA-HANSAMAL❤️
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});
                    
//download audio 

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio message    
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})





}catch(e){
  console.log(e)
  reply(`${e}`)
}
})

//===========video-dl============

cmd({
    pattern: "video",
    desc: "download videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
  if(!q) return reply("PLEASE GIVE ME VIDEO NAME OR YT URL")
  const search = await yts(q)
  const data = search.videos[0];
  const url = data.url
  let desc = ` 
 
╭──═❮ 📍*HANSAMAL-MD VIDEO DOWNLOADER*📱❯═─┈•
│✑ *Title:* ${data.title}
│✑ *Uploader:* ${data.author.name}
│✑ *Time* ${data.timestamps}
│✑ *Ago:* ${data.ago}
|✑ *Views:* ${data.views}
╰────────────────❃


MADE BY IMALKA-HANSAMAL❤️
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});
                    
//download video 

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send audio message    
await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})





}catch(e){
  console.log(e)
  reply(`${e}`)
}
})
