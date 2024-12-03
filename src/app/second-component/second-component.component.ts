import { Component } from '@angular/core';

@Component({
  selector: 'app-second-component',
  standalone: true,
  imports: [],
  templateUrl: './second-component.component.html',
  styles: ``
})
export class SecondComponentComponent {
  //creating first function
  message(){
    alert('hello')
  }
}
