import axios from 'axios';
import { SpotifyNowPlayingSong, SpotifyTopTrack } from 'types/spotifyTypes';
import { basicSpotifyAuthKey } from 'utils/spotifyHelper';

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
