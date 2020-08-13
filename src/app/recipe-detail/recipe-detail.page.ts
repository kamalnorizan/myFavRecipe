import { Recipedetail } from './../model/recipe-detail.model';
import { Recipe } from './../model/recipe.model';
import { RequestService } from './../services/request.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  title: string;
  imageUrl: string;
  recipeId: string;
  loadedRecipe: Recipe;
  ingrediants: Recipedetail[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private requestService: RequestService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        return;
      }
      const recipeId = paramMap.get('recipeId');
      const title = paramMap.get('title');
      const imageUrl = paramMap.get('imageUrl');
      this.recipeId = recipeId;
      this.title = title;
      this.imageUrl = imageUrl;
    });

    this.requestService.getRecipe(this.recipeId).subscribe(
      recipe => {
        this.loadedRecipe = recipe;
        this.ingrediants = this.loadedRecipe.ingredients;
      },
      error => {
        console.log(error);
      }
    );
  }
}
