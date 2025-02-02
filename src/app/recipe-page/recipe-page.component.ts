import { Component, HostListener, Input, Output } from '@angular/core';
import { RecipesDirective } from '../recipes.directive';

@Component({
  selector: 'app-recipe-page',
  imports: [],
  templateUrl: './recipe-page.component.html',
  styleUrl: './recipe-page.component.css'
})
export class RecipePageComponent extends RecipesDirective {


}
