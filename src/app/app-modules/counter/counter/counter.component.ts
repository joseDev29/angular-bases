import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Counter</h1>
    <h2>Result: {{ number }}</h2>
    <h3>Base: {{ base }}</h3>

    <button (click)="counter(true)">+</button>
    <button (click)="counter(false)">-</button>
  `,
})
export class CounterComponent {
  number: number = 0;
  base: number = 5;

  counter(action: boolean) {
    if (!action) {
      this.number -= this.base;
      return;
    }

    this.number += this.base;
  }
}
