import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  darkMode: boolean;

  constructor() {
    // Cargar preferencia del localStorage
    this.darkMode = JSON.parse(localStorage.getItem('darkMode') || 'false');
  }
  toggleDarkMode() {
    document.body.classList.toggle('dark', this.darkMode);
    localStorage.setItem('darkMode', JSON.stringify(this.darkMode));
    window.location.reload(); // Refresca la aplicación.
  }
  
}
