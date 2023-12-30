import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  title: string = '';

  constructor() {}

  ngOnInit(): void {}

  // onInput(event: any): void {
  //   this.title = event.target.value;
  // }
}
