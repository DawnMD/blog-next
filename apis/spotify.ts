import axios from 'axios';
import { URLSearchParams } from 'url';
import {
  SpotifyNowPlayingSong,
  SpotifyToken,
  SpotifyTopTrack,
} from '../types/spotify';
import { basicSpotifyAuthKey } from '../utils/spotify';

export const getSpotifyTokens = async () => {
  const { data: tokenData } = await axios.post<SpotifyToken>(
    'https://accounts.spotify.com/api/token',
    new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN as string,
    }),
    {
      headers: {
        Authorization: `Basic ${basicSpotifyAuthKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );

  const { token_type, access_token } = tokenData;

  return { access_token, token_type };
};

export const spotifyAPI = axios.create({
  baseURL: 'https://api.spotify.com/v1',
});

export const spotifyNowPlayingFetcher = async (
  url: string
): Promise<SpotifyNowPlayingSong> => {
  const { data } = await axios.get(`/api/spotify${url}`);
  return data;
};

export const spotifyTopTrackFetcher = async (
  url: string
): Promise<SpotifyTopTrack[]> => {
  const { data } = await axios.get(`/api/spotify${url}`);
  return data;
};
