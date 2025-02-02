import { Component } from '@angular/core';
import { FoodsService } from '../foods.service';
import { Meals } from '../meals';

@Component({
  selector: 'app-checken',
  imports: [],
  templateUrl: './checken.component.html',
  styleUrl: './checken.component.css'
})
export class CheckenComponent {
  foodLists:Meals[]=[]
  constructor(private foods:FoodsService){}
  ngOnInit():void{
    this.getAllFoods();
  }
  getAllFoods(){
    this.foods.getFoods("breakfast").subscribe({
      next:(res)=>{
        this.foodLists=res.meals;
      },
      error:(err)=>{console.log(err)}
    })
  }
}
