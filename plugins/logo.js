const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const { Maker } = require('imagemaker.js')
var imgmsg = "```Please give me a name !```"
var imgmsg2 = "*Ex: .banner imalka+hansamal*"
var imgmsg3 = "*Ex: .banner2 imalka+hansamal*"
var imgmsg4 = "*Ex: .banner3 imalka+hansamal*"
var imgmsg5 = "*Ex: .banner3 imalka+hansamal*"
var imgmsg6 = "*Ex: .banner3 imalka+hansamal*"
var desc = "It creates ephoto360 logos using 1 word.."
var desc2 = "It creates channel banners.."
var errt = "*I cant create this logo :(*"
cmd({
    pattern: "banner2",
    alias: ["ytbanner2","cover2","channelbanner2"],
    desc: desc2,
    category: "logo",
    use: '.banner2 vihanga+yt',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
    if (!q.includes('+')) return await reply(imgmsg3)
    let [name,name2] = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/make-your-own-free-fire-youtube-banner-online-free-562.html', [`${name}`,`${name2}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: config.FOOTER }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})
