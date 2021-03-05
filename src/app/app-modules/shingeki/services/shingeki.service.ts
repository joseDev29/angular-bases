import { Injectable } from '@angular/core';

//Interfaces
import { Personaje } from '../interfaces/shingeki.interfaces';

@Injectable()
export class ShingekiService {
  private _personajes: Personaje[] = [
    {
      nombre: 'Eren Jeager',
      poder: 'Titan Fundador',
    },
    {
      nombre: 'Annie Leonhart',
      poder: 'Titan Hembra',
    },
  ];

  constructor() {
    console.log('Servicio Inicializado');
  }

  get personajes(): Personaje[] {
    //Se envia un array independiente
    //del de personajes, para asi evitar
    //que se envie la referencia del original
    return [...this._personajes];
  }

  agregarPersonaje(personaje: Personaje): void {
    this._personajes.push(personaje);
  }
}
