import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Food } from './food';

@Injectable({
  providedIn: 'root'
})

export class FoodService {

  constructor(private http: HttpClient) { }

  getAllFood() {
    return this.http.get<Food[]>('http://localhost:8080/food/allFood');
  }

}
