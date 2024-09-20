const mumaker = require('mumaker'); 
const { cmd } = require('../command');
const config = require('../config'); // Ensure your API key is in config

cmd({
    pattern: "logo",
    desc: "Generate a logo for the WhatsApp bot.",
    category: "other",
    react: "🎨",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const botName = args.join(' ').trim() || ".logo";
        const logoUrl = `https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html?text=${encodeURIComponent(botName)}`;

        await conn.sendMessage(from,{IMG: {url:downloadUrl},mimetype:"logo/jpg",fileName:data.title + ".jpg",caption:"*© HANSAMAL-MD*"},{quoted:mek})
   }catch(e){
console.log(e)
  reply('${e}')
}
});
