import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Anime } from '../models/anime.interface';
import { AnimeService } from '../services/anime.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {

  id=0;
  anime!:Anime;

  paramsubscription:Subscription = new Subscription;

  constructor(private route: ActivatedRoute,  private servicio:AnimeService) { }

  ngOnInit(): void {
    this.paramsubscription = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.anime = this.servicio.getAnime(this.id);
    }
    );
  }

}
