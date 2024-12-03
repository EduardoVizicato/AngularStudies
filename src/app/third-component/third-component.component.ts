import { Component } from '@angular/core';

@Component({
  selector: 'app-third-component',
  standalone: true,
  imports: [],
  templateUrl: './third-component.component.html',
  styles: ``
})
export class ThirdComponentComponent {
  image: string = 'image.png'
  
  alterimage() {
    if(this.image == 'image.png'){
      this.image = 'image2.jpg'
    }
    else{
      this.image = 'image.png'
    }
  }
}
