const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/44826e95f6e863548e408.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello, I am HANSAMAL-MD BOT I AM ALIVE NOW!",
};
