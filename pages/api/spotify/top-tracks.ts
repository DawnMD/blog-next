import { NextApiResponse } from 'next';
import { spotifyAccount, spotifyAPI } from '../../../apis/spotify';
import {
  SpotifyTopResponse,
  SpotifyToken,
  SpotifyTopTrack,
} from '../../../types/spotify';

const handler = async (_, res: NextApiResponse) => {
  const { data: tokenData } = await spotifyAccount.post<SpotifyToken>(
    '/api/token',
    new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN as string,
    })
  );

  const { token_type, access_token } = tokenData;

  const { data: topTracksData } = await spotifyAPI.get<SpotifyTopResponse>(
    '/me/top/tracks?time_range=medium_term&limit=10',
    {
      headers: {
        Authorization: `${token_type} ${access_token}`,
      },
    }
  );

  const topTracks: SpotifyTopTrack[] = [];

  topTracksData.items.map((track) =>
    topTracks.push({
      id: track.id,
      name: track.name,
      album: {
        name: track.album.name,
        image: track.album.images[0],
      },
      songUrl: track.external_urls.spotify,
      artist: track.artists.map((_artist) => _artist.name).join(', '),
    })
  );

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  );

  res.status(200).json(topTracks);
};

export default handler;
