const ap = new APlayer({
    container: document.getElementById('player'),
    fixed: true,
    audio: [{
      name: 'Minecraft',
      artist: 'C418',
      url: 'https://npm.elemecdn.com/musiccdn-ariasaka/music/Minecraft.mp3',
      cover: 'https://npm.elemecdn.com/musiccdn-ariasaka/pic/Minecraft.jpg',
      lrc: 'https://npm.elemecdn.com/musiccdn-ariasaka/lyric/Minecraft.lrc',
  }]
});