const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')


cmd({

            pattern: "menu",

            alias: ["මෙනු","cmd","command"],

            desc: "(menu cmdlist).",

            category: "downloader",

            react: "🔖",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
            var mf = '```'
            let buttonMessage = {

                image: {

                    url: `https://telegra.ph/file/02494585f3dde9718e38d.jpg`,

                },


                
                caption: `
*𝗣𝗥𝗔𝗕𝗔𝗧𝗛-𝗠𝗗_𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 𝗟𝗜𝗦𝗧* 🎗️


🔢 Please reply the number you want to select



*1.1 |DOWNLOADER COMMANDS*

*1.2 |SEARCH COMMANDS*

*1.3 |CONVERT COMMANDS*

*1.4 |GROUP COMMANDS*

*1.5 |ADMIN COMMANDS*

*1.6 |GAME COMMANDS*

*1.7 |OTHER COMMANDS*


ᴘʀᴀʙᴀᴛʜ ⦁ ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ
ʀᴇʟᴇᴀsᴇᴅ ⦁ 𝟸𝟶𝟸𝟹/𝟶𝟷/𝟶𝟸`,

               

                headerType: 4,

            };

           const ttd = await Void.sendMessage(citel.chat, buttonMessage, {
          
                quoted: citel,

            });
          return await Void.sendMessage(citel.chat, { react: { text: '🔢', key: ttd.key } });

        }

    )

cmd(
  {
    on: "text"
  },
  async (Void,citel,text) => {
	  
	  	  const botNumber = await Void.decodeJid(Void.user.id);

  const menutext = `
*𝗣𝗥𝗔𝗕𝗔𝗧𝗛-𝗠𝗗_𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 𝗟𝗜𝗦𝗧* 🎗️


🔢 Please reply the number you want to select



*1.1 |DOWNLOADER COMMANDS*

*1.2 |SEARCH COMMANDS*

*1.3 |CONVERT COMMANDS*

*1.4 |GROUP COMMANDS*

*1.5 |ADMIN COMMANDS*

*1.6 |GAME COMMANDS*

*1.7 |OTHER COMMANDS*


ᴘʀᴀʙᴀᴛʜ ⦁ ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ
ʀᴇʟᴇᴀsᴇᴅ ⦁ 𝟸𝟶𝟸𝟹/𝟶𝟷/𝟶𝟸`;
var z = '```' ;
if (citel.text === "1.1") {
  if (!citel.quoted) return;
if ( citel.quoted.sender !== botNumber) return; 
  const quote = citel.quoted.text;
   if (quote.includes(menutext)) {
    const downmen = `
┏━━━━━━━━━━━━━━━━━━━━━━━━━━
┃ ⬇️ *𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 𝗟𝗜𝗦𝗧* ⬆️
┗━━━━━━━━━━━━━━━━━━━━━━━━━━
             


📟 *Command:-* ${z}.song${z}
ℹ️ *Description:-* ${z}song download${z}
🔥 *Help:-* ${z}.song lelena${z}


📟 *Command:-* ${z}.video${z}
ℹ️ *Description:-* ${z}video download${z}
🔥 *help:-* ${z}.video lelena${z}


📟 *Command:-* ${z}.tiktok${z}
ℹ️ *Description:-* ${z}tiktok video download${z}
🔥 *Help:-* ${z}.tiktok -tiktok video url-${z}


📟 *Command:-* ${z}.fb${z}
ℹ️ *Description:-* ${z}fb video download${z}
🔥 *Help:-* ${z}.fb -fb video url-${z}


📟 *Command:-* ${z}.fmmod${z}
ℹ️ *Description:-* ${z}download fouad-Whatsapp-Mods${z}
🔥 *Help:-* ${z}.fmmod${z}


📟 *Command:-* ${z}.apk${z}
ℹ️ *Description:-* ${z}application download${z}
🔥 *Help:-* ${z}.apk whatsapp${z}


📟 *Command:-* ${z}.img${z}
ℹ️ *Description:-* ${z}Get image from google${z}
🔥 *Help:-* ${z}.image cat${z}


📟 *Command:-* ${z}.mp4down${z}
ℹ️ *Description:-* ${z}download mp4${z}
🔥 *Help:-* ${z}.mp4down -video url-${z}


📟 *Command:-* ${z}.mediafire${z}
ℹ️ *Description:-* ${z}download mediafire file${z}
🔥 *Help:-* ${z}.mediafire  -mediafire url-${z}



ᴘʀᴀʙᴀᴛʜ ⦁ ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ
ʀᴇʟᴇᴀsᴇᴅ ⦁ 𝟸𝟶𝟸𝟹/𝟶𝟷/𝟶𝟸`;
    const getq = await Void.sendMessage(citel.chat, { image: { url: `https://telegra.ph/file/5754b48820921f1d21007.jpg` }, caption: downmen }, { quoted: citel });
   return await Void.sendMessage(citel.chat, { react: { text: '⬇️', key: getq.key } });
  }
}


if (citel.text === "1.2") {
  if (!citel.quoted) return;
if ( citel.quoted.sender !== botNumber) return;  
  const quote = citel.quoted.text;
 if (quote.includes(menutext)) {
    const searmen = `
┏━━━━━━━━━━━━━━━━━━━━━━━━━━
┃ 🔍 *𝗦𝗘𝗔𝗥𝗖𝗛 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 𝗟𝗜𝗦𝗧* 🔍
┗━━━━━━━━━━━━━━━━━━━━━━━━━━
             


📟 *Command:-* ${z}.findvideo${z}
ℹ️ *Description:-* ${z}find videos${z}
🔥 *Help:-* ${z}.findvideo -mention video-${z}


📟 *Command:-* ${z}.findsong${z}
ℹ️ *Description:-* ${z}find songs${z}
🔥 *help:-* ${z}.findsong -mention song-${z}


📟 *Command:-* ${z}.yts${z}
ℹ️ *Description:-* ${z}youtube search${z}
🔥 *Help:-* ${z}.yts lelena${z}


📟 *Command:-* ${z}.weather${z}
ℹ️ *Description:-* ${z}weather information${z}
🔥 *Help:-* ${z}.weather monaragala${z}


📟 *Command:-* ${z}.movie${z}
ℹ️ *Description:-* ${z}movie search${z}
🔥 *Help:-* ${z}.movie gajaman${z}


📟 *Command:-* ${z}.wabeta${z}
ℹ️ *Description:-* ${z}get whatsapp latest update informations${z}
🔥 *Help:-* ${z}.wabeta${z}


📟 *Command:-* ${z}.git${z}
ℹ️ *Description:-* ${z}get github informations${z}
🔥 *Help:-* ${z}.git prabathLK${z}





ᴘʀᴀʙᴀᴛʜ ⦁ ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ
ʀᴇʟᴇᴀsᴇᴅ ⦁ 𝟸𝟶𝟸𝟹/𝟶𝟷/𝟶𝟸`;
    const gets = await Void.sendMessage(citel.chat, { image: { url: `https://telegra.ph/file/5754b48820921f1d21007.jpg` }, caption: searmen }, { quoted: citel });
   return await Void.sendMessage(citel.chat, { react: { text: '🔍', key: gets.key } });
  }
}


if (citel.text === "1.3") {
  if (!citel.quoted) return;
if ( citel.quoted.sender !== botNumber) return;  
  const quote = citel.quoted.text;
 if (quote.includes(menutext)) {
    const conmen = `
┏━━━━━━━━━━━━━━━━━━━━━━━━━━
┃ 🛠️ *𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 𝗟𝗜𝗦𝗧* 🛠️
┗━━━━━━━━━━━━━━━━━━━━━━━━━━
             


📟 *Command:-* ${z}.sticker${z}
ℹ️ *Description:-* ${z}image to sticker${z}
🔥 *Help:-* ${z}.sticker mention image${z}


📟 *Command:-* ${z}.attp${z}
ℹ️ *Description:-* ${z}create colourfull sticker${z}
🔥 *help:-* ${z}.attp prabath-md${z}


📟 *Command:-* ${z}.ttp${z}
ℹ️ *Description:-* ${z}create sticker${z}
🔥 *Help:-* ${z}.ttl prabath-md${z}


📟 *Command:-* ${z}.steal${z}
ℹ️ *Description:-* ${z}change sticker pack name${z}
🔥 *Help:-* ${z}.steal prabath-md${z}


📟 *Command:-* ${z}.logo${z}
ℹ️ *Description:-* ${z}create logo${z}
🔥 *Help:-* ${z}.logo${z}


📟 *Command:-* ${z}.ptt${z}
ℹ️ *Description:-* ${z}audio to ptt${z}
🔥 *Help:-* ${z}.ptt -mention any audio-${z}


📟 *Command:-* ${z}.ss${z}
ℹ️ *Description:-* ${z}take web screen shot ${z}
🔥 *Help:-* ${z}.ss -website url-${z}


📟 *Command:-* ${z}.trt${z}
ℹ️ *Description:-* ${z}translate any language to sinhala${z}
🔥 *Help:-* ${z}.trt -mention message-${z}




ᴘʀᴀʙᴀᴛʜ ⦁ ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ
ʀᴇʟᴇᴀsᴇᴅ ⦁ 𝟸𝟶𝟸𝟹/𝟶𝟷/𝟶𝟸`;
    const getc = await Void.sendMessage(citel.chat, { image: { url: `https://telegra.ph/file/5754b48820921f1d21007.jpg` }, caption: conmen }, { quoted: citel });
   return await Void.sendMessage(citel.chat, { react: { text: '🛠️', key: getc.key } });
  }
}

if (citel.text === "1.4") {
  if (!citel.quoted) return;
  if ( citel.quoted.sender !== botNumber) return;
  const quote = citel.quoted.text;
 if (quote.includes(menutext)) {
    const groupmen = `
┏━━━━━━━━━━━━━━━━━━━━━━━━━━
┃ 👥 *𝗚𝗥𝗢𝗨𝗣 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 𝗟𝗜𝗦𝗧* 👥
┗━━━━━━━━━━━━━━━━━━━━━━━━━━
             


📟 *Command:-* ${z}.antispam${z}
ℹ️ *Description:-* ${z}Sends a secure envelope that protects against spam${z}
🔥 *Help:-* ${z}.antispam${z}


📟 *Command:-* ${z}.mute${z}
ℹ️ *Description:-* ${z}mute group${z}
🔥 *Help:-* ${z}.mute${z}


📟 *Command:-* ${z}.unmute${z}
ℹ️ *Description:-* ${z}unmute group${z}
🔥 *Help:-* ${z}.unmute${z}


📟 *Command:-* ${z}.promote${z}
ℹ️ *Description:-* ${z}promote Admin${z}
🔥 *Help:-* ${z}.promote Tag Any User${z}


📟 *Command:-* ${z}.invite${z}
ℹ️ *Description:-* ${z}get whatsapp group link${z}
🔥 *Help:-* ${z}.invite${z}


📟 *Command:-* ${z}.demote${z}
ℹ️ *Description:-* ${z}Demote Admin${z}
🔥 *help:-* ${z}.promote tag Any User${z}


📟 *Command:-* ${z}.ban${z}
ℹ️ *Description:-* ${z}Cmd Block Use${z}
🔥 *Help:-* ${z}.ban tag Any User${z}


📟 *Command:-* ${z}.unban${z}
ℹ️ *Description:-* ${z}Loked User Unblock${z}
🔥 *Help:-* ${z}.unban Tag Any User${z}


📟 *Command:-* ${z}.kick${z}
ℹ️ *Description:-* ${z}Remove Participants On Group${z}
🔥 *Help:-* ${z}.kick Tag Any User${z}


📟 *Command:-* ${z}.add${z}
ℹ️ *Description:-* ${z}Add Participants On Group${z}
🔥 *Help:-* ${z}.add 94762280xxx${z}


📟 *Command:-* ${z}.profile${z}
ℹ️ *Description:-* ${z}Profile Imfomation Get${z}
🔥 *Help:-* ${z}.profile Tag Any user${z}


📟 *Command:-* ${z}.gname${z}
ℹ️ *Description:-* ${z}change group name${z}
🔥 *Help:-* ${z}.gname Prabath-md${z}


📟 *Command:-* ${z}.gdesc${z}
ℹ️ *Description:-*  ${z}change Group desc${z}
🔥 *Help:-* ${z}.gdesc hello world${z}


📟 *Command:-* ${z}.left${z}
ℹ️ *Description:-*  ${z}leave group${z}
🔥 *Help:-* ${z}.left${z}


📟 *Command:-* ${z}.gdp${z}
ℹ️ *Description:-* ${z}Group Profile Photo Change${z}
🔥 *Help:-* ${z}.gdp Tag Any photo${z}


📟 *Command:-* ${z}.del${z}
ℹ️ *Description:-* ${z}Delete message${z}
🔥 *Help:-* ${z}.del tag message${z}


📟 *Command:-* ${z}.htg${z}
ℹ️ *Description:-* ${z}Hide Tag${z}
🔥 *Help:-* ${z}.htg prabath-md${z}


📟 *Command:-* ${z}.tag${z}
ℹ️ *Description:-* ${z}Tag All Group Users${z}
🔥 *Help:-* ${z}.tag${z}


📟 *Command:-* ${z}.jid${z}
ℹ️ *Description:-* ${z}Get Jid${z}
🔥 *Help:-* ${z}.getjids${z}


📟 *Command:-* ${z}.rank${z}
ℹ️ *Description:-* ${z}Check Rank${z}
🔥 *Help:-* ${z}.rank Tag Any User${z}


📟 *Command:-* ${z}.setwelcome${z}
ℹ️ *Description:-* ${z}Welcome message Change${z}
🔥 *Help:-* ${z}.setwelcome Your welcome Message${z}


📟 *Command:-* ${z}.setgoodbye${z}
ℹ️ *Description:-* ${z}goodbye message change${z}
🔥 *Help:-* ${z}.setgoodbye Your Goodbye Message${z}


📟 *Command:-* ${z}.group${z}
ℹ️ *Description:-* ${z}Group settings change${z}
🔥 *Help:-* ${z}.gs${z}



ᴘʀᴀʙᴀᴛʜ ⦁ ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ
ʀᴇʟᴇᴀsᴇᴅ ⦁ 𝟸𝟶𝟸𝟹/𝟶𝟷/𝟶𝟸`;
    const masss = await Void.sendMessage(citel.chat, { image: { url: `https://telegra.ph/file/5754b48820921f1d21007.jpg` }, caption: groupmen }, { quoted: citel });
   return await Void.sendMessage(citel.chat, { react: { text: '👥', key: masss.key } });
  }
}


if (citel.text === "1.5") {
  if (!citel.quoted) return;
if ( citel.quoted.sender !== botNumber) return;  
  const quote = citel.quoted.text;
 if (quote.includes(menutext)) {
    const admen = `
┏━━━━━━━━━━━━━━━━━━━━━━━━━━
┃ 🛠️ *𝗔𝗗𝗠𝗜𝗡 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 𝗟𝗜𝗦𝗧* 🛠️
┗━━━━━━━━━━━━━━━━━━━━━━━━━━
   
          

📟 *Command:-* ${z}.apply${z}
ℹ️ *Description:-* ${z}change env vars${z}
🔥 *Help:-* ${z}.apply [reply message]${z}


📟 *Command:-* ${z}.name${z}
ℹ️ *Description:-* ${z}change whatsApp profile name${z}
🔥 *Help:-* ${z}.name prabath-md${z}


📟 *Command:-* ${z}.about${z}
ℹ️ *Description:-* ${z}change whatsApp About${z}
🔥 *Help:-* ${z}.about hello i am using prabath-md bot${z}


📟 *Command:-* ${z}.jid${z}
ℹ️ *Description:-* ${z}get jid addres${z}
🔥 *Help:-* ${z}.ujid${z}


📟 *Command:-* ${z}.settings${z}
ℹ️ *Description:-* ${z}change bot settings${z}
🔥 *Help:-* ${z}.settings${z}


📟 *Command:-* ${z}.block${z}
ℹ️ *Description:-* ${z}block user${z}
🔥 *help:-* ${z}.block${z}


📟 *Command:-* ${z}.unblock${z}
ℹ️ *Description:-* ${z}unblock user${z}
🔥 *Help:-* ${z}.unblock${z}


📟 *Command:-* ${z}.ban${z}
ℹ️ *Description:-* ${z}ban user${z}
🔥 *Help:-* ${z}.ban -mention user-${z}


📟 *Command:-* ${z}.unban${z}
ℹ️ *Description:-* ${z}unban user${z}
🔥 *Help:-* ${z}.unban -mention user-${z}


📟 *Command:-* ${z}.restart${z}
ℹ️ *Description:-* ${z}restart bot${z}
🔥 *Help:-* ${z}.restart${z}


📟 *Command:-* ${z}.join${z}
ℹ️ *Description:-* ${z}join whatsapp group${z}
🔥 *Help:-* ${z}.join -whatsapp group url-${z}


📟 *Command:-* ${z}.save${z}
ℹ️ *Description:-* ${z}save some text notepad${z}
🔥 *Help:-* ${z}.save prabath-md${z}


📟 *Command:-* ${z}.get${z}
ℹ️ *Description:-* ${z}get saved text notepad${z}
🔥 *Help:-* ${z}.get${z}


📟 *Command:-* ${z}.dnote${z}
ℹ️ *Description:-* ${z}delete saved note${z}
🔥 *Help:-* ${z}.dnote -text id-${z}


📟 *Command:-* ${z}.dallnote${z}
ℹ️ *Description:-* ${z}delete all text notepad${z}
🔥 *Help:-* ${z}.dallnote${z}


📟 *Command:-* ${z}.update${z}
ℹ️ *Description:-* ${z}check bot updates${z}
🔥 *Help:-* ${z}.update${z}




ᴘʀᴀʙᴀᴛʜ ⦁ ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ
ʀᴇʟᴇᴀsᴇᴅ ⦁ 𝟸𝟶𝟸𝟹/𝟶𝟷/𝟶𝟸`;
    const getad = await Void.sendMessage(citel.chat, { image: { url: `https://telegra.ph/file/5754b48820921f1d21007.jpg` }, caption: admen }, { quoted: citel });
   return await Void.sendMessage(citel.chat, { react: { text: '👨‍💻', key: getad.key } });
  }
}


if (citel.text === "1.6") {
  if (!citel.quoted) return;
if ( citel.quoted.sender !== botNumber) return;  
  const quote = citel.quoted.text;
 if (quote.includes(menutext)) {
    const gamen = `
┏━━━━━━━━━━━━━━━━━━━━━━━━━━
┃🎮 *𝗚𝗔𝗠𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 𝗟𝗜𝗦𝗧* 🎮
┗━━━━━━━━━━━━━━━━━━━━━━━━━━
             

📟 *Command:-* ${z}xo${z}
ℹ️ *Description:-* ${z}xo--${z}
🔥 *Help:-* ${z}.xo${z}


ᴘʀᴀʙᴀᴛʜ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴘʀᴀʙᴀᴛʜ
ʀᴇʟᴇᴀsᴇᴅ ⦁ 𝟸𝟶𝟸𝟹/𝟶𝟷/𝟶𝟸
`;
    const gameqq = await Void.sendMessage(citel.chat, { image: { url: `https://telegra.ph/file/5754b48820921f1d21007.jpg` }, caption: gamen }, { quoted: citel });
   return await Void.sendMessage(citel.chat, { react: { text: '🎮', key: gameqq.key } });
  }
}


if (citel.text === "1.7") {
  if (!citel.quoted) return;
if ( citel.quoted.sender !== botNumber) return;  
  const quote = citel.quoted.text;
 if (quote.includes(menutext)) {
    const othmen = `
┏━━━━━━━━━━━━━━━━━━━━━━━━━━
┃ 💬 *𝗢𝗧𝗛𝗘𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 𝗟𝗜𝗦𝗧* 💬
┗━━━━━━━━━━━━━━━━━━━━━━━━━━
             


📟 *Command:-* ${z}.gpt${z}
ℹ️ *Description:-* ${z}chat gpt open Ai${z}
🔥 *Help:-* ${z}.gpt hello${z}


📟 *Command:-* ${z}.alive${z}
ℹ️ *Description:-* ${z}check bot online or offline${z}
🔥 *Help:-* ${z}.alive${z}


📟 *Command:-* ${z}.rank${z}
ℹ️ *Description:-* ${z}check rank${z}
🔥 *help:-* ${z}.rank${z}


📟 *Command:-* ${z}.profile${z}
ℹ️ *Description:-* ${z}user profile${z}
🔥 *Help:-* ${z}.profile${z}


📟 *Command:-* ${z}.system${z}
ℹ️ *Description:-* ${z}bot  running system ${z}
🔥 *Help:-* ${z}.system${z}



📟 *Command:-* ${z}.sn${z}
ℹ️ *Description:-* ${z}search whatsall account${z}
🔥 *Help:-* ${z}.sn 94762280xxx${z}


📟 *Command:-* ${z}.text${z}
ℹ️ *Description:-* ${z}get fancy text${z}
🔥 *Help:-* ${z}.text12 prabath-md${z}



ᴘʀᴀʙᴀᴛʜ ⦁ ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ
ʀᴇʟᴇᴀsᴇᴅ ⦁ 𝟸𝟶𝟸𝟹/𝟶𝟷/𝟶𝟸`;
    const getaee = await Void.sendMessage(citel.chat, { image: { url: `https://telegra.ph/file/5754b48820921f1d21007.jpg` }, caption: othmen }, { quoted: citel });
   return await Void.sendMessage(citel.chat, { react: { text: '💬', key: getaee.key } });
  }
}	  
  })
