import { Component } from '@angular/core';
import { RecipeModel } from 'src/app/shared/models/recipe.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
recipes: RecipeModel[] =[
  {name:'Lemon Pasta Pronto',
  description:'For the pasta and sauce: Bring a large pot of salted water to a boil.<br> Cook the pasta according to the package instructions.', 
  imgUrl:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/4/23/0/WU2206_Lemon-Pasta-Pronto_s4x3.jpg.rend.hgtvcom.826.620.suffix/1556054967663.jpeg'},
  {name:'Linguine and Clams',
  description:'For the broth: Bring the wine and 1 cup water to a boil in a stockpot over <br> high heat. Add the clams and cook until opened, about 5 minutes. Remove clams <br> with a slotted spoon to a bowl. Discard any clams that do not open. When cool <br> enough to handle, remove the clams from the shell and coarsely chop.', 
  imgUrl:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/8/15/0/CASH_1_s4x3.jpg.rend.hgtvcom.826.620.suffix/1408128762992.jpeg'},
  {name:'Shrimp Fettuccine Alfredo',
  description:'This take on a classic Italian-American recipe is super easy to make. <br> Slightly reducing the cream and adding a hefty dose of cheese means you <br> do not have to use flour to thicken the sauce.', 
  imgUrl:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/9/15/1/FNK_Shrimp-Fettucine-Alfredo_s4x3.jpg.rend.hgtvcom.826.620.suffix/1442375396193.jpeg'},
  {name:'Shrimp Scampi',
  description:'Toss the cauliflower florets with 1 tablespoon of the grapeseed oil and <br> some salt and pepper. Transfer to a baking sheet and roast until tender and <br> browned, 5 minutes. Set aside.', 
  imgUrl:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/2/26/1/IL1304ZH_Grilled-Shrimp-Scampi_s4x3.jpg.rend.hgtvcom.826.620.suffix/1458912437556.jpeg'},
  {name:'Shrimp Scampi',
  description:'Combine the shallots, 5 cloves garlic and 2 tablespoons of the olive oil <br> in a mini food processor. Process to make a smooth paste.', 
  imgUrl:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/11/15/0/FNM_120111-Feast-Of-Seven-Fishes-018_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382540926212.jpeg'},

];
}
