import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients:Ingredient[]=[
  new Ingredient(
    'some name',
    1000
  ),
  new Ingredient(
    'some name',
    2000
  )
];
  constructor() { }

  ngOnInit(): void {
  }

}
