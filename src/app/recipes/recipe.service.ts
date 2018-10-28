
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService{
  private recipes: Recipe[] = [
    new Recipe(
      'Pizza Regina',
      'With extra sauce',
      'https://img.bestrecipes.com.au/RCK3slSo/h300-w400-cscale/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg',
      [
        new Ingredient('Tomato Sauce', 1),
        new Ingredient('Mozarela', 20),
        new Ingredient('Onions', 10)
      ]),
    new Recipe(
      'Spagetti',
      'With extra olives',
      'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2F11%2F04%2Ffettuccine-olive-oil-ck-x.jpg%3Fitok%3Dbt5Cny7R&w=700&q=85',
      [
        new Ingredient('Spagetti',20),
        new Ingredient('Sauce', 10)
      ]),
    new Recipe(
      'Onion Rings',
      'With extra sauce',
      'https://www.inspiredtaste.net/wp-content/uploads/2013/01/Roasted-Pepper-Pinwheel-Pastry-Recipe-2-1200.jpg',
      [
        new Ingredient('Biscuits', 10),
        new Ingredient('Lettuce', 20)
      ])
    ];

    getRecipes(){
      return this.recipes.slice();
    }

    getRecipe(id: number){
      return this.recipes[id];
    }

    // recipeSelected = new EventEmitter<Recipe>();
}
