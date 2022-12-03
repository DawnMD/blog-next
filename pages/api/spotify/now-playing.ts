import { type NextRequest } from 'next/server';
import {
  SpotifyNowPlayingResponse,
  SpotifyNowPlayingSong,
} from 'types/spotifyTypes';
import { getNowPlaying } from 'utils/spotifyHelper';

export const config = {
  runtime: 'experimental-edge',
};

export default async function handler(req: NextRequest) {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return new Response(JSON.stringify({ isPlaying: false }), {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    });
  }

  const song: SpotifyNowPlayingResponse = await response.json();

  if (song.item === null) {
    return new Response(JSON.stringify({ isPlaying: false }), {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    });
  }

  const nowPlayingSong: SpotifyNowPlayingSong = {
    title: song.item.name,
    album: song.item.album.name,
    artist: song.item.artists.map((_artist) => _artist.name).join(', '),
    songUrl: song.item.external_urls.spotify,
    isPlaying: song.is_playing,
    albumImageUrl: song.item.album.images[0],
  };

  return new Response(JSON.stringify(nowPlayingSong), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, s-maxage=60, stale-while-revalidate=30',
    },
  });
}
