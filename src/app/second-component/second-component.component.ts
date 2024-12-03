import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-second-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './second-component.component.html',
  styles: ``
})
export class SecondComponentComponent {
  //creating first function
  // message(){
    //   alert('hello')
    // }

    condition = true;

    list = ['True', 'True', 'False']
  }
