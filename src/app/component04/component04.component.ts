import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component04',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component04.component.html',
  styles: ``
})
export class Component04Component {
  exhibition : boolean = true;

  action(){
    if(this.exhibition === true){
      this.exhibition = false
  }
  else{
    this.exhibition = true
  }
  }


  names: string[] = ["Eduardo", "Yasmim", "Fofão", "Shiraoka"];
}
