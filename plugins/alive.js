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
    pattern: "logo",
    react: '🎭',
    alias: ["logo1","ephoto360","ephoto"],
    desc: desc,
    category: "logo",
    use: '.ephoto360 ayodya vichakshana',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await reply(imgmsg)
let wm = `© HANSAMAL-MD v${require("../package.json").version} (Test)\nWABOT MADE BY IMALKA HANSAMAL ッ`
let buttons = [
        {
          "name": "quick_reply",
          "buttonParamsJson": JSON.stringify({
            display_text: "MENU",
            id: `.menu`
          })
        },
        {
          "name": "quick_reply",
          "buttonParamsJson": JSON.stringify({
            display_text: "PING",
            id: `.ping`
          })
        }
        ];

            await conn.sendMessage(from, {
            image: { url: config.ALIVE_IMG },
            caption: config.ALIVE_MSG
        }, { quoted: mek });

    } catch(e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
})

