import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Twowaybinding } from './twowaybinding/twowaybinding'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Twowaybinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  initialCount = 18;
  protected readonly title = signal('');
}
