const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const { Maker } = require('imagemaker.js')
cmd({
    pattern: "logo",
    react: '🎭',
    alias: ["logo1","ephoto360","ephoto"],
    desc: "desc",
    category: "other",
    use: '.ephoto360 hansamal',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🎆', key: mek.key }})
    if (!q.includes('+')) return await reply(imgmsg4)
    let [name,name2] = q.split('+')
    new Maker().Ephoto360('https://en.ephoto360.com/create-glossy-silver-3d-text-effect-online-802.html', [`${name}`,`${name2}`]).then(async res => {
        await conn.sendMessage(from, { image: await getBuffer(res.imageUrl), caption: HANSAMAL-MD }, { quoted: mek })
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
    })
} catch (e) {
    reply(errt)
  l(e)
}
})
