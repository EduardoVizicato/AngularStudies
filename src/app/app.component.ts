import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from "./third-component/third-component.component";
import { Component04Component } from "./component04/component04.component";
import { Component05Component } from "./component05/component05.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponentComponent, SecondComponentComponent, ThirdComponentComponent, Component04Component, Component05Component],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'AngularStudies';
}
