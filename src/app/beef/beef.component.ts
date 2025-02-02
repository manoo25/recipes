import { Component } from '@angular/core';
import { FoodsService } from '../foods.service';
import { Meals } from '../meals';

@Component({
  selector: 'app-beef',
  imports: [],
  templateUrl: './beef.component.html',
  styleUrl: './beef.component.css'
})
export class BeefComponent {
  foodLists:Meals[]=[]
  constructor(private foods:FoodsService){}
  ngOnInit():void{
    this.getAllFoods();
  }
  getAllFoods(){
    this.foods.getFoods("beef").subscribe({
      next:(res)=>{
        this.foodLists=res.meals;
      },
      error:(err)=>{console.log(err)}
    })
  }
}
