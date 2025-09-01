import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-twowaybinding',
  imports: [FormsModule],
  templateUrl: './twowaybinding.html',
  styleUrl: './twowaybinding.css'
})
export class Twowaybinding {
  firstName = 'blub';
  count = model<number>(0);

  updateCount(amount:number): void {
    this.count.update(currentCount => currentCount + amount)
  }

}
