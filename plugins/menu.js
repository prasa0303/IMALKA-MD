const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "menu",
    desc: "To get the menu.",
    react: "😚",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let menu = {
main: '',
download: '',
group: '',
owner: '',
logo: '',
convert: '',
search: '',
fun: '',
other: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}

let madeMenu = `
🌟 *HANSAMAL-MDMAIN MENU* 🌟

      👋 HELLO, ${pushname}!

✨ WELCOME TO HANSAMAL-MD! ✨ 

📊 *𝗕𝗼𝘁 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻:*
────────────────────
⏳ *𝗥𝘂𝗻𝘁𝗶𝗺𝗲:* ${runtime(process.uptime())}
👤 *OWNER NAME:* IMALKA HANSAMAL
📞 *OWNER NUMBWE:* +94711262251
────────────────────

📥 *𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗠𝗲𝗻𝘂:*

${menu.download}

────────────────────
🔧 *𝗠𝗮𝗶𝗻 𝗠𝗲𝗻𝘂:*

${menu.main}

────────────────────
🎉 *𝗙𝘂𝗻 𝗠𝗲𝗻𝘂:*

${menu.fun}

────────────────────
👥 *𝗚𝗿𝗼𝘂𝗽 𝗠𝗲𝗻𝘂:*

${menu.group}

────────────────────
🔒 *𝗢𝘄𝗻𝗲𝗿 𝗠𝗲𝗻𝘂:*

${menu.owner}

────────────────────
🔒 *𝗢𝘄𝗻𝗲𝗿 𝗠𝗲𝗻𝘂:*

${menu.logo}

────────────────────
🔄 *𝗖𝗼𝗻𝘃𝗲𝗿𝘁 𝗠𝗲𝗻𝘂:*

${menu.convert}

────────────────────
🔍 *𝗦𝗲𝗮𝗿𝗰𝗵 𝗠𝗲𝗻𝘂:*

${menu.search}

────────────────────
⚙️ *𝗢𝘁𝗵𝗲𝗿 𝗠𝗲𝗻𝘂:*

${menu.other}

────────────────────
*© HANSAMAL- MD* 
💻 *GitHub:* github.com/cobrs11/HANSAMAL-MD
 

`

return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption:madeMenu},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})

