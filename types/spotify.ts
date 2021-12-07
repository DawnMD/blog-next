type AlbumImage = {
  height: number;
  url: string;
  width: number;
};

type Artist = {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

export interface SpotifyNowPlayingResponse {
  is_playing: boolean;
  item: {
    name: string;
    artists: Artist[];
    album: {
      name: string;
      images: AlbumImage[];
    };
    external_urls: {
      spotify: string;
    };
  };
}

export interface SpotifyTopTrack {
  id: string;
  name: string;
  album: {
    name: string;
    image: AlbumImage;
  };
  songUrl: string;
  artist: string;
}
export interface SpotifyTopResponse {
  items: {
    id: string;
    album: {
      name: string;
      images: AlbumImage[];
    };
    artists: Artist[];
    external_urls: {
      spotify: string;
    };
    name: string;
  }[];
}

export interface SpotifyToken {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
}

export interface SpotifyNowPlayingSong {
  album: string;
  albumImageUrl: AlbumImage;
  artist: string;
  isPlaying: true;
  songUrl: string;
  title: string;
}
