import { Image } from './image';

export class Artist {
  id: string;
  name: string;
  external_urls: { spotify: string };
  followers: { href: string; total: number };
  genres: string[];
  href: string;
  images: Image[];
  popularity: number;
  type: string;
  uri: string;
}
