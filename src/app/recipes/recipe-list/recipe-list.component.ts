import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is a test', 'https://ichef.bbci.co.uk/food/ic/food_16x9_506/recipes/cornbread_86386_16x9.jpg'),
    new Recipe('Another Recipe','This is another test', 'https://ichef.bbci.co.uk/food/ic/food_16x9_506/recipes/cornbread_86386_16x9.jpg')
  ];

  @Output() recipeItemSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(item: Recipe) {
    this.recipeItemSelected.emit(item);
  }

}
