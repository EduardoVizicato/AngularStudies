import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-component.component.html',
  styles: ``
})
export class FirstComponentComponent {
  // name: string = 'Eduardo';
  // age : number = 34;

  language: string = 'C#'
}
