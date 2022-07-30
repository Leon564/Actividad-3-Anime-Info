import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../models/character.interface';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  constructor() { }
  @Input() character!:  Character;

  ngOnInit(): void {
  }

}
