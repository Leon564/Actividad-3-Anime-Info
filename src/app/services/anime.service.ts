import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Anime } from '../models/anime.interface';

import _animes from './animes.json';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  constructor() {}
  private animes:Anime[] = JSON.parse(JSON.stringify(_animes));
  listadoAnimes(): Anime[] {
    return this.animes;
  }
  getAnime(id: number): Anime {
    console.log(typeof id, typeof this.animes[0].id);
    return <Anime>this.animes.find((anime) => anime.id === id);
  }
}
