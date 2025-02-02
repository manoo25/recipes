import { Component } from '@angular/core';
import { FoodsService } from '../foods.service';
import { Meals } from '../meals';

@Component({
  selector: 'app-lamb',
  imports: [],
  templateUrl: './lamb.component.html',
  styleUrl: './lamb.component.css'
})
export class LambComponent {
foodLists:Meals[]=[]
  constructor(private foods:FoodsService){}
  ngOnInit():void{
    this.getAllFoods();
  }
  getAllFoods(){
    this.foods.getFoods("lamb").subscribe({
      next:(res)=>{
        this.foodLists=res.meals;
      },
      error:(err)=>{console.log(err)}
    })
  }
}
