import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id:  '1',
      title: 'Egusi Soap',
      imageUrl: 'https://www.demandafrica.com/wp-content/uploads/2017/06/EgusiSoup-e1533238405501.jpg.webp',
      ingredients: ['fish', 'pepper', 'onion', 'salt']
    },
    {
      id:  '2',
      title: 'Vegetable Soap',
      imageUrl: 'https://www.allnigerianrecipes.com/wp-content/uploads/2019/03/edikaikong-soup.jpg',
      ingredients: ['fish', 'Vegetable', 'onion', 'salt']
    }
  ];
  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }

  deleteRecipe(recipeId: string) {
  this.recipes = this.recipes.filter(recipe => {
    return recipe.id !== recipeId;
  });
  }
}
