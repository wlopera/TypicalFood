import { Component, OnInit } from '@angular/core';

import { Food } from '../food';
import { FOODS } from '../mock-foods';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {

  foods: Food[] = FOODS;

  selectedFood: Food;

  constructor() { }

  ngOnInit() {
  }

  onSelected(food: Food): void {
    this.selectedFood = food;
  }

}
