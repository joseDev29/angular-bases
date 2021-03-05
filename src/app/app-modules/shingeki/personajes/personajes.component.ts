import { Component, Input } from '@angular/core';

//Interfaces
import { Personaje } from '../interfaces/shingeki.interfaces';
import { ShingekiService } from '../services/shingeki.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  //@Input('data') personajes: Personaje[] = [];

  constructor(private shingekiService: ShingekiService) {}

  get personajes(): Personaje[] {
    return this.shingekiService.personajes;
  }
}
