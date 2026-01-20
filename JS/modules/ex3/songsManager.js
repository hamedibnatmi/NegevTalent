export default function () {
    const songs = {};


    return {
        // songs,
        addSong: (song, url) => songs[song] = `https://www.youtube.com/watch?v=${url}`,
        getSong: (song) => console.log(songs[song])
    }
}