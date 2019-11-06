import { Component, OnInit, Input } from '@angular/core';

import { Food } from '../food';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit {

  @Input() food: Food;

  constructor() { }

  ngOnInit() {
  }

}
