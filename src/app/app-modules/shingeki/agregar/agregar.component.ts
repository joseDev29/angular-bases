import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

//Interfaces
import { Personaje } from '../interfaces/shingeki.interfaces';
import { ShingekiService } from '../services/shingeki.service';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent {
  nuevo: Personaje = {
    nombre: '',
    poder: '',
  };

  constructor(private shingekiService: ShingekiService) {}

  agregarPersonaje() {
    if (!this.nuevo.nombre.trim().length || !this.nuevo.poder.trim().length)
      return;

    this.shingekiService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: '',
    };
  }
}

/* @Input() nuevo: Personaje = {
    nombre: '',
    poder: '',
  };*/

//Va emitir un evento de tipo Personaje
//@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

/*emitirPersonaje() {
    if (!this.nuevo.nombre.trim().length || !this.nuevo.poder.trim().length)
      return;

    this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: '',
    };
  }*/
