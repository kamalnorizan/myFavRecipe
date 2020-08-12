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
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( (param) => {
      const title = param.get('title');
      const imageUrl = param.get('imageUrl');
      this.title = title;
      this.imageUrl = imageUrl;
    });
  }

}
