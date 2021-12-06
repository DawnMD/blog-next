import { NextApiResponse } from 'next';
import { getSpotifyTokens, spotifyAPI } from '../../../apis/spotify';
import { SpotifyNowPlayingResponse } from '../../../types/spotify';

const handler = async (_, res: NextApiResponse) => {
  const { token_type, access_token } = await getSpotifyTokens();

  const { data: nowPlayingData, status } =
    await spotifyAPI.get<SpotifyNowPlayingResponse>(
      '/me/player/currently-playing',
      {
        headers: {
          Authorization: `${token_type} ${access_token}`,
        },
      }
    );
  if (!nowPlayingData.is_playing || status === 204 || status > 400) {
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
