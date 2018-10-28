import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import {ShoppingListService} from '../shoppingList.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
  }


  addIngredient(name: string, amount: number){
    const newIngredient = new Ingredient(name,amount);
    this.shoppingService.addItem(newIngredient);
  }
}
