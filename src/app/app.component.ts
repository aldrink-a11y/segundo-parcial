import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html', // <-- Esta ruta debe coincidir con tu archivo
  styleUrls: ['./app.component.css'] // o .scss
})
export class AppComponent {
  // ... el código del constructor con Title va aquí ...

  solicitarPermiso(): void {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        console.log('Permiso para notificaciones concedido.');
      }
    });
  }

  probarNotificacion(): void {
    if (Notification.permission === 'granted') {
      new Notification('¡Hola desde Segundo Parcial!', {
        body: 'Esta es una notificación de prueba. ¡Funciona!',
        icon: 'assets/icons/icon-192x192.png'
      });
    } else {
      alert('Primero debes permitir las notificaciones.');
    }
  }
}