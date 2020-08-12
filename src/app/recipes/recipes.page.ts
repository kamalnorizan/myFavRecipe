import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: any[] = [
    {
      title: 'Nasi Ayam',
      imageUrl: 'https://resepichenom.com/media/895c9dbf91933941985d76d069f9b1982912b5da.jpeg',
      ingredients: ['Ayam', 'Nasi', 'Sup Kosong']
    },
    {
      title: 'Nasi Goreng Kampung',
      imageUrl: 'https://resepichenom.com/media/895c9dbf91933941985d76d069f9b1982912b5da.jpeg',
      ingredients: ['Ayam', 'Ikan Bilis', 'Kangkung']
    },
    {
      title: 'Nasi Goreng Cina',
      imageUrl: 'https://resepichenom.com/media/895c9dbf91933941985d76d069f9b1982912b5da.jpeg',
      ingredients: ['Ayam', 'Lobak Merah', 'Jagung']
    },
    {
      title: 'Roti Canai',
      imageUrl: 'https://resepichenom.com/media/895c9dbf91933941985d76d069f9b1982912b5da.jpeg'
    }
  ];

  constructor() { }

  ngOnInit() {
    // this.recipes = ;
  }



}
