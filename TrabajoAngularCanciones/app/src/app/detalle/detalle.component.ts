import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { cancionServicio } from '../cancion.service';
import { Cancion } from '../cancion';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: "./detalle.component.html",
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  servicio = inject(cancionServicio);
  cancion: Cancion | undefined;




}
