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
  // 2. Inyectar el servicio Title en el constructor
  public constructor(private titleService: Title) {
    // 3. Establecer el título de la página
    this.titleService.setTitle('Segundo Parcial - Home');
  }
}