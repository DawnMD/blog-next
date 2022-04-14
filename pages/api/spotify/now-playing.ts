import { NextApiResponse } from 'next';
import { URLSearchParams } from 'url';
import { spotifyAccount, spotifyAPI } from '../../../apis/spotify';
import {
  SpotifyNowPlayingResponse,
  SpotifyToken,
} from '../../../types/spotifyData';

const handler = async (_: any, res: NextApiResponse) => {
  const { data: tokenData } = await spotifyAccount.post<SpotifyToken>(
    '/api/token',
    new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN as string,
    })
  );

  const { token_type, access_token } = tokenData;

  const { data: nowPlayingData, status } =
    await spotifyAPI.get<SpotifyNowPlayingResponse>(
      '/me/player/currently-playing',
      {
        headers: {
          Authorization: `${token_type} ${access_token}`,
        },
      }
    );
  if (
    nowPlayingData.currently_playing_type === 'episode' ||
    !nowPlayingData.is_playing ||
    status === 204 ||
    status > 400
  ) {
    return res.status(200).json({ isPlaying: false });
  }

  const nowPlaying = {
    album: nowPlayingData.item.album.name,
    albumImageUrl: nowPlayingData.item.album.images[0],
    artist: nowPlayingData.item.artists
      .map((_artist) => _artist.name)
      .join(', '),
    isPlaying: nowPlayingData.is_playing,
    songUrl: nowPlayingData.item.external_urls.spotify,
    title: nowPlayingData.item.name,
  };

  return res.status(200).json({ ...nowPlaying });
};

export default handler;
