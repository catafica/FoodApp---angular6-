import { Ingredient } from '../shared/ingredient.model'

export class ShoppingListService{
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10)
  ];

  getShoppingList(){
    return this.ingredients;
  }

  addItem(ingredient: Ingredient){
    this.ingredients.push(ingredient)
  }
}
