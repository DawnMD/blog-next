import { NextApiResponse } from 'next';
import { getSpotifyTokens, spotifyAPI } from '../../../apis/spotify';
import { SpotifyTopResponse } from '../../../types/spotify';

const handler = async (_, res: NextApiResponse) => {
  const { token_type, access_token } = await getSpotifyTokens();

  const { data: topTracksData } = await spotifyAPI.get<SpotifyTopResponse>(
    '/me/top/tracks',
    {
      headers: {
        Authorization: `${token_type} ${access_token}`,
      },
    }
  );

  const topTracks = topTracksData.items.slice(0, 10).map((track) => ({
    id: track.id,
    name: track.name,
    album: {
      name: track.album.name,
      image: track.album.images[0],
    },
    songUrl: track.external_urls.spotify,
    artist: track.artists.map((_artist) => _artist.name).join(', '),
  }));

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  );

  res.status(200).json(topTracks);
};

export default handler;
