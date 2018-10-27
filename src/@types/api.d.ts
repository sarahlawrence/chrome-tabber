export interface UnsplashResponse {
  id: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  downloads: number;
  likes: number;
  liked_by_user: boolean;
  description: string;
  location: Location;
  current_user_collections: CurrentUserCollection[];
  urls: Urls;
  links: UnsplashResponseLinks;
  user: User;
}

export interface CurrentUserCollection {
  id: number;
  title: string;
  published_at: string;
  updated_at: string;
  curated: boolean;
  cover_photo: null;
  user: null;
}

export interface UnsplashResponseLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface Location {
  city: string;
  country: string;
  position: Position;
}

export interface Position {
  latitude: number;
  longitude: number;
}

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface User {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  portfolio_url: string;
  bio: string;
  location: string;
  total_likes: number;
  total_photos: number;
  total_collections: number;
  links: UserLinks;
}

export interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
}
