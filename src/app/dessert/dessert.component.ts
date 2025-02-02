import { Component } from '@angular/core';
import { FoodsService } from '../foods.service';
import { Meals } from '../meals';

@Component({
  selector: 'app-dessert',
  imports: [],
  templateUrl: './dessert.component.html',
  styleUrl: './dessert.component.css'
})
export class DessertComponent {
 foodLists:Meals[]=[]
  constructor(private foods:FoodsService){}
  ngOnInit():void{
    this.getAllFoods();
  }
  getAllFoods(){
    this.foods.getFoods("Dessert").subscribe({
      next:(res)=>{
        this.foodLists=res.meals;
      },
      error:(err)=>{console.log(err)}
    })
  }
}
