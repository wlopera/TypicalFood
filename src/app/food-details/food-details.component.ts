import { Component, OnInit } from '@angular/core';

import { Food } from '../food';
import { FOODS } from '../mock-foods';

import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit {

  food: Food;
  foods: Food[] = FOODS;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.food = this.foods.find(x => new String(x.id) == id);

  }

  goBack(): void {
    this.location.back();
  }

}
