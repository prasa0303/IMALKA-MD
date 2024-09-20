const axios = require('axios');
const sharp = require('sharp'); // Image processing library
const { cmd } = require('../command');

cmd({
    pattern: "hd",
    desc: "📸 Convert an image to HD quality",
    react: "📸",
    category: "useful",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        const imageUrl = q.trim();
        if (!imageUrl) return reply("❗ Please provide an image URL. Usage: .hd [image URL]");

        // Download image
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const imageBuffer = Buffer.from(response.data, 'binary');

        // Process image to HD
        const hdImageBuffer = await sharp(imageBuffer)
            .resize({ width: 1920, height: 1080 }) // Resize to HD resolution
            .toBuffer();

        // Send HD image
        const media = MessageMedia.fromBuffer(hdImageBuffer, 'hd_image.png');
        await conn.sendMessage(from, media, { caption: '📸 Here is your HD image!' });
    } catch (e) {
        console.error(e);
        return reply("⚠️ An error occurred while processing the image. Please try again later.");
    }
});
