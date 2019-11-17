import { Component, OnInit } from '@angular/core';

import { Food } from '../food';
//import { FOODS } from '../mock-foods';

import { FoodService } from '../food.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {

  //foods: Food[] = FOODS;

  foods: Food[] = [];

  selectedFood: Food;

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.foodService.getAllFood()
      .subscribe(
        result => {
          console.log('Platos tipicos: %o', result);
          this.foods = result;
        },
        error => {
          console.error('Error en la entrada de datos: %o', error);
        }
      );

  }

  onSelected(food: Food): void {
    this.selectedFood = food;
  }

}
