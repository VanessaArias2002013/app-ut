import { Injectable } from '@angular/core';
import { Food } from './food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {


  menu:Food []= [
    {
      id:1,
      name:'pizza',
      description:'carnes',
      category:'food',
      image:'https://th.bing.com/th/id/OIP.1ebAb8OKVl6BHm-Ju7cf5AHaE7?rs=1&pid=ImgDetMain',
      price:300,
    },
    {
      id:2,
      name:'pizza',
      description:'carnes',
      category:'food',
      image:'https://th.bing.com/th/id/OIP.1ebAb8OKVl6BHm-Ju7cf5AHaE7?rs=1&pid=ImgDetMain',
      price:300,
    },
    {
      id:3,
      name:'pizza',
      description:'carnes',
      category:'food',
      image:'https://th.bing.com/th/id/OIP.1ebAb8OKVl6BHm-Ju7cf5AHaE7?rs=1&pid=ImgDetMain',
      price:300,
    },
    {
      id:4,
      name:'pizza',
      description:'carnes',
      category:'food',
      image:'https://th.bing.com/th/id/OIP.1ebAb8OKVl6BHm-Ju7cf5AHaE7?rs=1&pid=ImgDetMain',
      price:300,
    },
    {
      id:5,
      name:'pizza',
      description:'carnes',
      category:'food',
      image:'https://th.bing.com/th/id/OIP.1ebAb8OKVl6BHm-Ju7cf5AHaE7?rs=1&pid=ImgDetMain',
      price:300,
    },
    {
      id:6,
      name:'pizza',
      description:'carnes',
      category:'food',
      image:'https://th.bing.com/th/id/OIP.1ebAb8OKVl6BHm-Ju7cf5AHaE7?rs=1&pid=ImgDetMain',
      price:300,
    },
    {
      id:7,
      name:'pizza',
      description:'carnes',
      category:'food',
      image:'https://th.bing.com/th/id/OIP.1ebAb8OKVl6BHm-Ju7cf5AHaE7?rs=1&pid=ImgDetMain',
      price:300,
    },
    {
      id:8,
      name:'pizza',
      description:'carnes',
      category:'food',
      image:'https://th.bing.com/th/id/OIP.1ebAb8OKVl6BHm-Ju7cf5AHaE7?rs=1&pid=ImgDetMain',
      price:300,
    },
    
  ]

  constructor() {}


   public getAllFoods():Food[]{
    return this.menu;
   }
}
