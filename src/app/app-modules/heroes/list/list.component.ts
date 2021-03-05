import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  heroes: string[] = ['Spiderman', 'Iron Man', 'Hulk'];
  deletedHeroe: string | null = null;

  deleteHeroe() {
    if (!this.heroes?.length) return;

    this.deletedHeroe = this.heroes.pop() || null;
  }
}
