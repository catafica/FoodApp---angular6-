import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shoppingList.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  toggle: string = 'false';
  i:number;
  id:number;

  constructor(private shoppingService: ShoppingListService,
              private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.route.params
    .subscribe(
      (params) => {
       this.id = +params['id'];
       this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  }

  navigate(){
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route})
  }

  toggleCls(){
    if (this.toggle == 'false'){
      this.toggle = 'true';
    } else {
      this.toggle = 'false';
    }
  }

  addIngredients(ingredients: Ingredient[]){
    this.i = 0;
    while ( this.i < ingredients.length ){
        this.shoppingService.addItem(ingredients[this.i]);
        this.i++;
    }
    this.toggleCls();
  }
}
