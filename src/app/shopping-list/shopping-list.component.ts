import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {
ingredients: Ingredient[];

  constructor(private shoppingServie: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingServie.getShoppingList();
  }



}
