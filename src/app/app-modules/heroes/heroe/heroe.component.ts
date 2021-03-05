import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  template: `
    <h1>{{ name }}</h1>

    <dl>
      <td>Name:</td>
      <dd>{{ name }}</dd>

      <td>Age:</td>
      <dd>{{ age }}</dd>

      <td>Data:</td>
      <dd>{{ getHeroeData() }}</dd>

      <td>Upper Case Name:</td>
      <dd>{{ nameUpperCase }}</dd>
    </dl>

    <button (click)="changeHeroe()">Change Heroe</button>

    <button (click)="changeAge()">Change Age</button>
  `,
})
export class HeroeComponent {
  name: string = 'Thor';
  age: number = 200;

  get nameUpperCase(): string {
    return this.name.toUpperCase();
  }

  getHeroeData(): string {
    return `${this.name} - ${this.age} `;
  }

  changeHeroe(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 50;
  }
}
