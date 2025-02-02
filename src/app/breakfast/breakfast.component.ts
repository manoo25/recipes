import { Component } from '@angular/core';
import { FoodsService } from '../foods.service';
import { Meals } from '../meals';

@Component({
  selector: 'app-breakfast',
  imports: [],
  templateUrl: './breakfast.component.html',
  styleUrl: './breakfast.component.css'
})
export class BreakfastComponent {
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
