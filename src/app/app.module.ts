import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FoodsComponent } from './foods/foods.component';
import { FoodDetailsComponent } from './food-details/food-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodsComponent,
    FoodDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
