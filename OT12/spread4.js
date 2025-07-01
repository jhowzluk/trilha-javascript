const playlistOriginal = ['Bohemian Rhapsody', 'Stairway to Heaven', 'Hotel California'];

const playlistCopiada = [...playlistOriginal];

playlistCopiada[0] = 'Like a Rolling Stone';

console.log('Playlist Original:', playlistOriginal);

console.log('Playlist Copiada e Modificada:', playlistCopiada);