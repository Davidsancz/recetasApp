import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule
import { PrivacyPolicyPageRoutingModule } from './privacy-policy-routing.module';
import { PrivacyPolicyPage } from './privacy-policy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, // Asegúrate de incluir esto
    PrivacyPolicyPageRoutingModule,
  ],
  declarations: [PrivacyPolicyPage],
})
export class PrivacyPolicyPageModule {}
