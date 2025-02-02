import { Directive, HostListener, Input, input } from '@angular/core';
import { Meals } from './meals';
import { FoodsService } from './foods.service';

@Directive({
  selector: '[appRecipes]'
})
export  class RecipesDirective {
@Input()  index!:number;
nm:number=1;
 foodLists:Meals[]=[]
  constructor(private foods:FoodsService){}
  ngOnInit():void{
    this.getAllFoods();
  }
  getAllFoods(){
    this.foods.getFoods("").subscribe({
      next:(res)=>{
        this.foodLists=res.meals;
      },
      error:(err)=>{console.log("err")}
    })
  }
@HostListener('click') show(){
 console.log([this.index]);
 this.nm=this.index
  }

 

}
