import { Component, OnInit } from '@angular/core';
import { FoodService } from './shared/food.service';
import { Food } from './shared/food.model';
import { log } from 'console';

@Component({
  selector: 'app-foods',
  standalone: true,
  imports: [],
  templateUrl: './foods.component.html',
  styleUrl: './foods.component.scss'
})
export class FoodsComponent implements OnInit {

  data:Food[]= [];
  constructor(public serviceFood:FoodService) {}

  ngOnInit(): void {
    this.data = this.serviceFood.getAllFoods();
    console.log (this.data);
  }

}
