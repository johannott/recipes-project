import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new Subject<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'A test description',
      'https://media2.s-nbcnews.com/j/newscms/2018_35/1363730/rachel-hollis-' +
      'chicken-fingers-today-main-180828_b9b2a726ec8654e3f9f7435ce26588fb.today-inline-large.jpg',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Veg', 2)
      ]),
    new Recipe(
      'Another Test Recipe',
      'Another test description',
      'https://media2.s-nbcnews.com/j/newscms/2018_35/1363730/rachel-hollis-' +
      'chicken-fingers-today-main-180828_b9b2a726ec8654e3f9f7435ce26588fb.today-inline-large.jpg',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Veg', 2)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
