import { Component, OnInit } from '@angular/core';
import { Anime } from '../models/anime.interface';
import { AnimeService } from '../services/anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css'],
})
export class AnimeListComponent implements OnInit {
  titulo: string = 'Anime List';
  animes: Anime[] = [];
  constructor(private servicio: AnimeService) {}

  ngOnInit(): void {
    this.animes = this.servicio.listadoAnimes();
  }
}
