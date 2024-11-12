import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router'; 
import axios from 'axios'; 

@Component({
  selector: 'app-recipe-detail', 
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'], 
})
export class RecipeDetailPage implements OnInit {

  recipeId: number; // Almacena el ID de la receta obtenida de la ruta.
  recipe: any;

  constructor(private route: ActivatedRoute) {
    this.recipeId = +(this.route.snapshot.paramMap.get('id') ?? 0);
  }

  async ngOnInit() {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${this.recipeId}/information?apiKey=2390905b726e4afa99d69d165861f178`
      );
      this.recipe = response.data;
    } catch (error) {
      console.error('Error al cargar los detalles de la receta:', error);
    }
  }
}
