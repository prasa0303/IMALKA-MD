const { Client, MessageMedia } = require('whatsapp-web.js');
const ytdl = require('ytdl-core');
const fs = require('fs');

const client = new Client();

client.on('qr', (qr) => {
    console.log('QR Code:', qr);
});

client.on('ready', () => {
    console.log('Bot is ready!');
});

client.on('message', async (msg) => {
    if (msg.body.startsWith('!song ')) {
        const url = msg.body.split(' ')[1];
        if (!ytdl.validateURL(url)) {
            return msg.reply('❗ Invalid YouTube URL. Please provide a valid link.');
        }

        const stream = ytdl(url, { filter: 'audioonly' });
        const filePath = `./downloaded_audio.mp3`;

        stream.pipe(fs.createWriteStream(filePath));

        stream.on('finish', async () => {
            const media = MessageMedia.fromFilePath(filePath);
            await client.sendMessage(msg.from, media, { caption: 'HANSAMAL-MD' });
            fs.unlinkSync(filePath); // Clean up after sending
        });

        stream.on('error', () => {
            msg.reply('⚠️ Error downloading the song. Please try again later.');
        });
    }
});

client.initialize();
