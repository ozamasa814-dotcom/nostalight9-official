export interface Track {
  id: number;
  title: string;
  duration: string;
  audioFile?: string;
}

export interface Album {
  id: string;
  title: string;
  releaseDate: string;
  type: 'album' | 'ep';
  heroImage: string;
  coverImage: string;
  description: string;
  tracks: Track[];
}

export const albums: Album[] = [
  {
    id: 'in-the-wake-of-dreams',
    title: 'In the Wake of Dreams',
    releaseDate: '2025-10-28',
    type: 'album',
    heroImage: '/albums/in-the-wake-of-dreams.png',
    coverImage: '/albums/in-the-wake-of-dreams.png',
    description: '夢と現実の境界で紡がれる、14の物語。',
    tracks: [
      { id: 1, title: 'Between Worlds', duration: '3:45', audioFile: '/audio/in-the-wake/cut_01 Between Worlds.mp3' },
      { id: 2, title: 'Silent Glow', duration: '4:12', audioFile: '/audio/in-the-wake/cut_02 Silent Glow.mp3' },
      { id: 3, title: 'BLUE BLUE BLUE', duration: '3:58', audioFile: '/audio/in-the-wake/cut_03 BLUE BLUE BLUE.mp3' },
      { id: 4, title: 'Under the Sky', duration: '4:30', audioFile: '/audio/in-the-wake/cut_04 Under the Sky.mp3' },
      { id: 5, title: 'Sally', duration: '3:22', audioFile: '/audio/in-the-wake/cut_05 Sally.mp3' },
      { id: 6, title: 'BREAK CODE', duration: '4:05', audioFile: '/audio/in-the-wake/cut_06 BREAK CODE.mp3' },
      { id: 7, title: 'BLUE BLUE', duration: '3:50' },
      { id: 8, title: 'Look Inside the Mirror', duration: '4:18' },
      { id: 9, title: 'Willy', duration: '3:35' },
      { id: 10, title: 'Fading Dawn', duration: '4:42' },
      { id: 11, title: 'Delete Me', duration: '3:28' },
      { id: 12, title: 'Shine On Me', duration: '4:15' },
      { id: 13, title: 'BLUE', duration: '3:52' },
      { id: 14, title: 'After the light', duration: '5:01' },
    ],
  },
  {
    id: 'echoes-of-one-eyed-willy',
    title: 'Echoes of One-Eyed Willy',
    releaseDate: '2025-10-19',
    type: 'album',
    heroImage: '/albums/echoes-of-one-eyed-willy.png',
    coverImage: '/albums/echoes-of-one-eyed-willy.png',
    description: '青い海と星空が交差する夜、失われた記憶の断片が音となって響く。',
    tracks: [
      { id: 1, title: 'Hey! Goonies', duration: '3:24' },
      { id: 2, title: 'Gonna Be Crazy', duration: '3:58' },
      { id: 3, title: 'HYSTERIC', duration: '4:12' },
      { id: 4, title: 'SIREN', duration: '3:45' },
      { id: 5, title: 'Go Go Over Drive', duration: '4:05' },
      { id: 6, title: 'Treasure', duration: '3:52' },
      { id: 7, title: 'Willy', duration: '4:18' },
      { id: 8, title: 'Ride on Unicorn', duration: '4:30' },
    ],
  },
  {
    id: 'nostalight9',
    title: 'Nostalight9',
    releaseDate: '2025-10-10',
    type: 'album',
    heroImage: '/albums/nostalight9.png',
    coverImage: '/albums/nostalight9.png',
    description: 'セルフタイトル作品。Nostalight9の原点がここにある。',
    tracks: [
      { id: 1, title: 'Track 1', duration: '3:30' },
      { id: 2, title: 'Track 2', duration: '4:00' },
      { id: 3, title: 'Track 3', duration: '3:45' },
    ],
  },
  {
    id: 'ska-punk-halloween',
    title: 'Ska Punk Halloween!',
    releaseDate: '2025-10-09',
    type: 'ep',
    heroImage: '/albums/ska-punk-halloween.png',
    coverImage: '/albums/ska-punk-halloween.png',
    description: 'ハロウィンの夜に響くスカパンクサウンド。',
    tracks: [
      { id: 1, title: 'Track 1', duration: '2:45' },
      { id: 2, title: 'Track 2', duration: '3:15' },
      { id: 3, title: 'Track 3', duration: '2:58' },
    ],
  },
  {
    id: 'parallel-world',
    title: 'Parallel World',
    releaseDate: '2025-09-21',
    type: 'ep',
    heroImage: '/albums/parallel-world.png',
    coverImage: '/albums/parallel-world.png',
    description: '並行世界への扉を開く、4つの楽曲。',
    tracks: [
      { id: 1, title: 'Track 1', duration: '3:20' },
      { id: 2, title: 'Track 2', duration: '4:10' },
      { id: 3, title: 'Track 3', duration: '3:35' },
      { id: 4, title: 'Track 4', duration: '4:25' },
    ],
  },
];

