import { Component } from '@angular/core';
import axios from 'axios';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html', 
  styleUrls: ['./home.page.scss'], 
})
export class HomePage {

  searchQuery: string = ''; // Almacena la consulta de búsqueda ingresada.
  recipes: any[] = []; // Guarda las recetas obtenidas de la API.
  loading: boolean = false; // Indica si la app está cargando resultados.

  constructor(private navCtrl: NavController, private alertCtrl: AlertController) {}

  async searchRecipes() {
    // Verifica que el usuario haya ingresado una búsqueda válida.
    if (!this.searchQuery.trim()) {
      const alert = await this.alertCtrl.create({
        header: 'Error', 
        message: 'Por favor ingresa una búsqueda válida.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    this.loading = true;
    try {
      // Realiza la solicitud a la API para buscar recetas.
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${this.searchQuery}&apiKey=2390905b726e4afa99d69d165861f178`
      );
      this.recipes = response.data.results;
    } catch (error) {
  
      const alert = await this.alertCtrl.create({
        header: 'Error', 
        message: 'No se encontraron resultados.',
        buttons: ['OK'], 
      });
      await alert.present();
    }
    this.loading = false;
  }

  // Navega a la página de detalles de la receta seleccionada.
  goToRecipeDetail(id: number) {
    this.navCtrl.navigateForward(`/recipe-detail/${id}`);
  }
  goToSettings() {
    this.navCtrl.navigateForward('/settings');
  }

  ngOnInit() {
    // Verifica si el usuario está autenticado.
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      this.navCtrl.navigateRoot('/login');
    }
  }
}
