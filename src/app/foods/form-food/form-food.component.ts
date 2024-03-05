import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { Food } from '../shared/food.model';
import { FoodService } from '../shared/food.service';

@Component({
  selector: 'app-form-food',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: './form-food.component.html',
  styleUrl: './form-food.component.scss',
})
export class FormFoodComponent {
  /*    id:number;
    name:string;
    description:string;
    image:string;
    category:string;
    price:number; []*/

  form = this.formBuilder.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    image: ['', [Validators.required]],
    category: ['', [Validators.required]],
    price: ['', [Validators.required, Validators.min(2)]],
  });
  constructor(private formBuilder: FormBuilder, public serviceFood:FoodService) {}


  public sendData(){
    if (this.form.status == 'VALID'){
      if(
        this.name?.value &&
        this.description?.value &&
        this.image?.value &&
        this.category?.value &&
        this.price?.value

      ){
        let priceNumber = Number(this.price.value);
        let comida: Food = {
          name: this.name?.value,
          description: this.description?.value,
          category: this.category?.value,
         image: this.image?.value,
          price: priceNumber
        };
        console.log(comida);
        this.serviceFood.addFood(comida);

      }
    }
  }
  get name() {
    return this.form.get('name');
  }
  get description() {
    return this.form.get('description');
  }
  get image() {
    return this.form.get('image');
  }
  get category() {
    return this.form.get('category');
  }
  get price() {
    return this.form.get('price');
  }


 
}
