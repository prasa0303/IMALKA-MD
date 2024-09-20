const axios = require('axios');
const { cmd } = require('../command');

cmd({
    pattern: "logo",
    desc: "🎨 Create a logo with your name",
    react: "🎨",
    category: "useful",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        const name = q.trim();
        if (!name) return reply("❗ Please provide a name for the logo. Usage: .logo [your name]");

        // ePhoto360 API URL (replace this with actual API endpoint if available)
        const logoUrl = `https://en.ephoto360.com/create-online-3d-comic-style-text-effects-817.php?text=${encodeURIComponent(name)}`;

        const response = await axios.get(logoUrl);
        
        // Assuming that the logo image is returned in the response
        const logoImageUrl = response.data; // Adjust based on actual response structure

        const logoMessage = `
🎨 *HANSAMAL-MD Logo* 🎨

🔤 *Name*: ${name}
🖼️ *Logo Image*: ${logoImageUrl}

> HANSAMAL-MD LOGO CREATOR`;

        return reply(logoMessage);
    } catch (e) {
        console.log(e);
        return reply("⚠️ An error occurred while creating the logo. Please try again later.");
    }
});
