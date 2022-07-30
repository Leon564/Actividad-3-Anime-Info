import { Character } from './character.interface';
export interface Anime {
  id: number;
  title: string;
  genre: string;
  episodes: number;
  rating: number;
  year: number;
  about: string;
  image: string;
  characters: Character[];
}
