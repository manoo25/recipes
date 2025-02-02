import { Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { BeefComponent } from './beef/beef.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { CheckenComponent } from './checken/checken.component';
import { DessertComponent } from './dessert/dessert.component';
import { GoatComponent } from './goat/goat.component';
import { LambComponent } from './lamb/lamb.component';
import { PastaComponent } from './pasta/pasta.component';
import { SeafoodComponent } from './seafood/seafood.component';
import { VeganComponent } from './vegan/vegan.component';
import { VegetarianComponent } from './vegetarian/vegetarian.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StarterComponent } from './starter/starter.component';
import { SideComponent } from './side/side.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';

export const routes: Routes = [
    {path:'' ,redirectTo:'All',pathMatch:'full'},
    {path:'All' , component:AllComponent},
    {path:'Beef' , component:BeefComponent},
    {path:'BreakFast' , component:BreakfastComponent},
    {path:'Checken' , component:CheckenComponent},
    {path:'Dessert' , component:DessertComponent},
    {path:'Goat' , component:GoatComponent},
    {path:'Lamb' , component:LambComponent},
    {path:'Pasta' , component:PastaComponent},
    {path:'SeaFood' , component:SeafoodComponent},
    {path:'Vegan' , component:VeganComponent},
    {path:'Vegetarian' , component:VegetarianComponent},
    {path:'Starter' , component:StarterComponent},
    {path:'Side' , component:SideComponent},
    {path:'recipes' , component:RecipePageComponent},
    {path:'**',component:NotFoundComponent}
];
