const {cmd , commands} = require('../command')
const fg = require ( 'api-dylux' )
const yts = require ( 'yt-search' ) 


cmd({
    pattern: "video",
    desc: "download video",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
  if(!q) return reply("PLEASE GIVE ME VIDEO NAME OR YT URL")
  const search = await ytv(q)
  const data = search.videos[0];
  const url = data.url
  let desc = ` 
🎶 HANSAMAL-MD YT VIDEO DOWNLOADER 🎶

titile: ${data.titile}
description: ${data.description}
time: ${data.timestamps}
ago: ${data.ago}
views: ${data.views}


MADE BY IMALKA-HANSAMAL❤️
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});
                    
//download video 

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video massage    
await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})





}catch(e){
  console.log(e)
  reply(`${e}`)
}
})

 
    
    
    
