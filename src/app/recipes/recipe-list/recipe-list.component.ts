import { Recipe } from '../../shared/recipes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'the test recipe',
      'the test description',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/satay-sweet-potato-curry_1-710fb3f.jpg'
    ),
    new Recipe(
      'the test recipe',
      'the test description',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/satay-sweet-potato-curry_1-710fb3f.jpg'
    )
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
