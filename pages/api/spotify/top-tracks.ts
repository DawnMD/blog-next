import { type NextRequest } from 'next/server';
import { SpotifyTopResponse } from 'types/spotifyTypes';
import { getTopTracks } from 'utils/spotifyHelper';

export const config = {
  runtime: 'experimental-edge',
};

export default async function handler(req: NextRequest) {
  const response = await getTopTracks();
  const { items } = (await response.json()) as SpotifyTopResponse;

  const tracks = items.slice(0, 10).map((track) => ({
    artist: track.artists.map((_artist) => _artist.name).join(', '),
    songUrl: track.external_urls.spotify,
    title: track.name,
    album: track.album,
  }));

  return new Response(JSON.stringify({ tracks }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}
