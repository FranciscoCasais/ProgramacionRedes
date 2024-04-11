import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cancion } from '../cancion';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cancion',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl:"cancion.component.html",
  styleUrls: ['./cancion.component.css'],
})

export class CancionComponent {

  @Input() cancion!: Cancion;

}
