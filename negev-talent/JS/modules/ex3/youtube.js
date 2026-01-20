import SongsManager from "./songsManager.js";


const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")
// console.log(songsManager.songs)
songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ