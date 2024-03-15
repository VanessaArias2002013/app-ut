import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../shared/food.model';
import { FoodService } from '../shared/food.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-details-food',
  standalone: true,
  imports: [MatButtonModule,MatCardModule, CurrencyPipe, TitleCasePipe, MatIcon],
  templateUrl: './details-food.component.html',
  styleUrl: './details-food.component.scss'
})
export class DetailsFoodComponent implements OnInit {


  constructor(public foodservice:FoodService) {

  }
  activedRoute:ActivatedRoute = inject(ActivatedRoute);
  foodId:number = -1;
  food?:Food = {
    name:'',
    description:'',
    image:'',
    category:'',
    price:0
  }




  ngOnInit(): void {
 this.foodId = Number(this.activedRoute.snapshot.params['id']);
 this.food = this.foodservice.getOne(this.foodId);
  }
}
