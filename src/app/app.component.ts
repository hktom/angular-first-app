import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { CounterComponent } from './counter/counter.component';
import { InputComponent } from './input/input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponentComponent,
    CounterComponent,
    InputComponent,
  ],
})
export class AppComponent {
  title = 'angular-first-app';
}
