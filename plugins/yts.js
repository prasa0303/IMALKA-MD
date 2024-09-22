const ytdl = require('ytdl-core');

const downloadSong = async (url) => {
    try {
        const info = await ytdl.getInfo(url);
        const format = ytdl.chooseFormat(info.formats, { quality: 'highestaudio' });

        // Here you can stream the audio or save it as a file
        return format.url; // This is the URL to the audio stream
    } catch (error) {
        console.error('Error downloading the song:', error);
    }
};

// Example usage
const url = 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID';
downloadSong(url).then(audioUrl => {
    console.log('Audio URL:', audioUrl);
});
