import { Component } from '@angular/core';
import { FoodsService } from '../foods.service';
import { Meals } from '../meals';
import { RecipesDirective } from '../recipes.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all',
  imports: [],
  templateUrl: './all.component.html',
  styleUrl: './all.component.css'
})
export class AllComponent {
  foodLists:Meals[]=[]
  constructor(private foods:FoodsService){}
  ngOnInit():void{
    this.getAllFoods();
  }
  getAllFoods(){
    this.foods.getFoods("").subscribe({
      next:(res)=>{console.log(res.meals),
        this.foodLists=res.meals;
      },
      error:(err)=>{console.log(err)}
    })
  }



}
