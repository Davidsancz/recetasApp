import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

if ('serviceWorker' in navigator){
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/ngsw-worker.js').then((registration)=>{
      console.log('Service Worker Registrado con Exito: ', registration);
    }).catch((error)=>{
      console.error('Error en el registro del Service Worker: ',error);
    });
  });
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
