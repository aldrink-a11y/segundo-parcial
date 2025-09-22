import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ui-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-demo.component.html', // <-- Esta ruta debe coincidir con tu archivo
  styleUrls: ['./ui-demo.component.css']
})
export class UiDemoComponent {

}