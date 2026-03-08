import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Plato {
  nombre: string;
  descripcion: string;
  imagen?: string; // opcional
}

@Component({
  selector: 'app-carta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent {
  currentTab: 'normal' | 'cocteles' = 'normal';

  // Controla cuál plato está desplegado
  platoDesplegado: number | null = null;
  coctelDesplegado: number | null = null;

  // Toggle para platos normales
  togglePlato(index: number) {
    this.platoDesplegado = this.platoDesplegado === index ? null : index;
  }

  // Toggle para cócteles
  toggleCoctel(index: number) {
    this.coctelDesplegado = this.coctelDesplegado === index ? null : index;
  }

  // Carta normal con imagen y descripción
  cartaNormal: Plato[] = [
    {
      nombre: 'Paella de Marisco',
      descripcion: 'Deliciosa paella con gambas, mejillones y calamares.',
      imagen: 'assets/platos/paella.jpg'
    },
    {
      nombre: 'Ensalada César',
      descripcion: 'Lechuga fresca, pollo, crutones y queso parmesano.',
      imagen: 'assets/platos/ensalada.jpg'
    },
    {
      nombre: 'Sopa de Pimentón',
      descripcion: 'Sopa suave con un toque ahumado.',
      imagen: 'assets/platos/sopa.jpg'
    },
    {
      nombre: 'Esférico de Morcilla',
      descripcion: 'Pequeños esféricos rellenos de morcilla con crujiente.',
      imagen: 'assets/platos/morcilla.jpg'
    }
  ];

  // Carta de cócteles con imagen y descripción
  cartaCocteles: Plato[] = [
    {
      nombre: 'Mojito',
      descripcion: 'Refrescante mojito con hierbabuena y lima.',
      imagen: 'assets/cocteles/mojito.jpg'
    },
    {
      nombre: 'Melon + Menta + Vodka',
      descripcion: 'Cóctel afrutado y fresco ideal para verano.',
      imagen: 'assets/cocteles/melon.jpg'
    },
    {
      nombre: 'Ginebra + Pimienta',
      descripcion: 'Cóctel aromático con un toque picante.',
      imagen: 'assets/cocteles/ginebra.jpg'
    }
  ];
}