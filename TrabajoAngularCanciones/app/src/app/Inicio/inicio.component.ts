import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancionComponent } from '../cancion/cancion.component';
import { Cancion } from '../cancion';
import { cancionServicio } from '../cancion.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    CancionComponent
  ],
  templateUrl: "./inicio.component.html",
  styleUrls: ['./inicio.component.css'],
})

export class InicioComponent {
  listaCanciones: Cancion[] = [];
  servicio: cancionServicio = inject(cancionServicio);
  resultados: Cancion[] = [];
  constructor() {
    this.listaCanciones = this.servicio.obtenerTodasLasCanciones();
    this.resultados = this.listaCanciones;
  }
  filtrarResultados(text: string) {
    if (!text) {
      this.resultados = this.listaCanciones;
      return;
    }
    this.resultados = this.listaCanciones.filter(
      cancionActual => cancionActual?.artista.toLowerCase().includes(text.toLowerCase())
    );
  }
  onSubmit(e: { preventDefault: () => void; }, texto:string){
    if (e) e.preventDefault();
    this.filtrarResultados(texto);
    }
}
