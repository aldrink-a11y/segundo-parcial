import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser'; // <-- 1. Importar Title

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public constructor(private titleService: Title) {
  
  }

  
  solicitarPermiso(): void {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        console.log('Permiso para notificaciones concedido.');
        alert('¡Gracias por darnos permiso para notificar!');
      } else {
        console.log('Permiso para notificaciones denegado.');
        alert('No nos diste permiso. No te preocupes, no te molestaremos.');
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
      alert('Primero debes hacer clic en "Permitir notificaciones".');
    }
  }
}