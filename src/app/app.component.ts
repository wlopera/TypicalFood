import { Component } from '@angular/core';

import { Food } from './food';
import { FOODS } from './mock-foods';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'COMIDAS TIPICAS';
  foods: Food[] = FOODS;

}
