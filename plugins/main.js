const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "📜",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let menu = {

main: '',
download: '',
group: '',
owner: '',
convert: '',
search: ''

};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}

let madeMenu = `👋🏻 *Hello ${pushname}*

> *DOWNLOAD MENU* ⬇️

${menu.download}

> *MAIN MENU* 📃

${menu.main}

> *GROUP MENU*

${menu.group} 👨‍👨‍👦

> *OWNER MENU* 👨‍💻

${main.owner}

> *CONVERT MENU* ♻️

${menu.convert}

> *SEARCH MENU* 🔍

${menu.search}

POWERED BY IMALKA-HANSAMAL 💚



`
await conn.sendMessage(from,{image:{url:"https://telegra.ph/file/c718b67d351c1190e285b.jpg"},caption:medeMenu},{quoted.mek})


}catch(e){
console.log(e)
reply(`${e}`)
}
})
