import axios from 'axios';
import { SpotifyNowPlayingSong } from '../types/spotify';
import { basicSpotifyAuthKey } from '../utils/spotify';

export const spotifyAccount = axios.create({
  baseURL: 'https://accounts.spotify.com',
  headers: {
    Authorization: `Basic ${basicSpotifyAuthKey}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

export const spotifyAPI = axios.create({
  baseURL: 'https://api.spotify.com/v1',
});

export const spotifyFetcher = async (
  url: string
): Promise<SpotifyNowPlayingSong> => {
  const { data } = await axios.get(`/api/spotify${url}`);
  return data;
};
