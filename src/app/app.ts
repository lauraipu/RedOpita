import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router'; // IMPORTA ESTO

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink], // AÑÁDELOS AQUÍ
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'RedOpita';
}