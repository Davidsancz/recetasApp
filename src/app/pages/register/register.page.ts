import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  goToSettings() {
    this.navCtrl.navigateForward('/settings');
  }


  async register() {
    if (this.registerForm.invalid) {
      alert('Por favor, completa todos los campos correctamente.');
      return;
    }

    const { email, password } = this.registerForm.value;
    try {
      await this.afAuth.createUserWithEmailAndPassword(email, password);
      alert('Registro exitoso');
      this.navCtrl.navigateRoot('/home');
    } catch (error) {
      console.error('Error al registrar:', error);
      alert('Hubo un problema al registrarse');
    }
  }
}
