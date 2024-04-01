import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-proyect-card',
  standalone: true,
  imports:  [ MatIconModule, MatButtonModule],
  templateUrl: './proyect-card.component.html',
  styleUrl: './proyect-card.component.scss'
})
export class ProyectCardComponent {

}
