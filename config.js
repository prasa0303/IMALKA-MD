const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "3BozDJxD#w2EN81MMVpCHnQsYLczxXPBd6f1D-3uhgqKUNdU0mQg",
MONGODB: process.env.MONGODB || "url",
PEXELS_API_KEY: process.env.PEXELS_API_KEY || "39WCzaHAX939xiH22NCddGGvzp7cgbu1VVjeYUaZXyHUaWlL1LFcVFxH",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
};
