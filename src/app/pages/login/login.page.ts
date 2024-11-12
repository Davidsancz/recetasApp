import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  goToSettings() {
    this.navCtrl.navigateForward('/settings');
  }


  async login() {
    if (this.loginForm.invalid) {
      alert('Por favor, completa los campos correctamente.');
      return;
    }

    const { email, password } = this.loginForm.value;
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      localStorage.setItem('isLoggedIn', 'true');
      console.log("Login exitosooooo");
      this.navCtrl.navigateRoot('/home'); 
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Correo o contraseña incorrectos');
    }
  }


  goToRegister() {
    this.navCtrl.navigateForward('/register');
  }

}
