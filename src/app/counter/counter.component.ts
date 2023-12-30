import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  data: number = 0;

  increment() {
    this.data++;
  }

  decrement() {
    this.data--;
  }

  reset() {
    this.data = 0;
  }
}
