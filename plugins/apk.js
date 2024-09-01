 const { tlang, botpic, cmd, prefix, runtime, Config, formatp, fetchJson } = require('../lib')
const { download} = require('aptoide-scraper')
const { Sequelize, Model, DataTypes } = require('sequelize');

const url = Config.database_url;

let sequelize = new Sequelize(url, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: true
  },
  define: {
    underscored: true
  },
  logging: false // Disable logging of SQL queries
});
class Database extends Model {}
Database.init({
  alive_msj: {
    type: DataTypes.STRING,
    defaultValue: process.env.ALIVE_MSJ || 'made by imalka hansamal👨‍💻',
  },
  alive_img: {
    type: DataTypes.STRING,
    defaultValue: process.env.ALIVE_IMG || 'https://telegra.ph/file/44826e95f6e863548e408.jpg',
  },
  owner_name: {
    type: DataTypes.STRING,
    defaultValue: process.env.OWNER_NAME || 'Imalka Hansamal',
  },
  dl_size: {
    type: DataTypes.INTEGER,
    defaultValue: process.env.DL_SIZE || '70',
  },
  sudo: {
    type: DataTypes.STRING,
    defaultValue: process.env.SUDO || '94711262551',
  },
  antilink_valus: {
    type: DataTypes.STRING,
    defaultValue: process.env.ANTILINK_VALUS || 'chat.whatsapp.com',
  },
  prefix: {
    type: DataTypes.STRING,
    defaultValue: process.env.PREFIX || '.',
  },
  owner_number: {
    type: DataTypes.STRING,
    defaultValue: process.env.OWNER_NUMBER || '94711262551',
  },
  openai_api_key: {
    type: DataTypes.STRING,
    defaultValue: process.env.OPENAI_API_KEY || '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',
  },
  anti_bad_word: {
    type: DataTypes.STRING,
    defaultValue: process.env.ANTI_BAD_WORD || 'hutththa,paka,hukanna,ponnaya,kariya,ponnayaa.hukanawa,pako,pakoo,ponna,huththi,huththaa,huth',
  },
}, {
  sequelize,
  modelName: 'database_env',
  timestamps: false,
});

//----------------------------------------------

cmd({
    pattern: "apk",
    alias: ["app","findapk","downapk","ps"],
    desc: "download playstore app",
    react: "🗃️",
    category: "downloader",
    filename: __filename,
},
async (Void, citel, text) => {
 await sequelize.authenticate();
const dbintaface = await Database.findOne();

const ddl = dbintaface.dl_size
var dlsize = `${ddl}`
if (!text) return citel.reply("*Give me a application name or playstore application Url* ❗")
  try {
    let result;
    if (text.startsWith("https://play.google.com/store/apps/details?id=")) {
      const appId = text.split("=")[1];
      result = await download(appId);
    } else {
      result = await download(text);
       }
 const applink = result.dllink
    const getname = result.name
    const icon = result.icon
   
    const size = result.size
    let desc = `

ℹ️ *Name:* ${result.name}
⬆️ *Updated on:* ${result.lastup}
💮 *Package:* ${result.package}
🗃️ *Size:* ${result.size}

ʜᴀɴꜱᴀᴍᴀʟ-ᴍᴅ
MADE BY IMALKA HANSAMAL `
const files = size.split(".")[1];
      
const fileSizee = parseFloat(size);
const fileSize = fileSizee.toString().split(".")[0];
let fileSizeInMegabytes = parseFloat(fileSize);
if (fileSizeInMegabytes <= dlsize) {
const getreact = await Void.sendMessage(citel.chat, { image: { url: icon }, caption: desc }, { quoted: citel });

await Void.sendMessage(citel.chat, { react: { text: '🔄', key: getreact.key } });

const getreacta = await Void.sendMessage(citel.chat, {

                document: {

                    url: applink ,

                },

                mimetype: "application/vnd.android.package-archive",

                caption: `ʜᴀɴꜱᴀᴍᴀʟ-ᴍᴅ n/ᴍᴀᴅᴇ ʙʏ ɪᴍᴀʟᴋᴀ`,

                fileName: getname ,

            }, {

                quoted: citel,

            });                     

await Void.sendMessage(citel.chat, { react: { text: '🗃️', key: getreacta.key } });

return await Void.sendMessage(citel.chat, { react: { text: '✅', key: getreact.key } });
 } else {

                    citel.reply(`*I Can't download this application because the file size is more than ${dlsize}MB ❗*`);

                }
 
} catch (err) {          

        console.log(err);

        citel.reply (`❌ *${err}*`);

 }

        

    })

     
