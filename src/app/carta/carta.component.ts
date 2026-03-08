import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent {
  currentTab: 'normal' | 'cocteles' = 'normal';

  cartaNormal = [
    { nombre: 'Sopa de Pimentón', descripcion: '' },
    { nombre: 'Esférico de Morcilla', descripcion: '' },
    { nombre: 'Gravadlax', descripcion: '' },
    { nombre: 'Krumpuk Codium', descripcion: '' },
    { nombre: 'Mejillones rellenos', descripcion: '' },
    { nombre: 'Tartaleta de Salmón', descripcion: '' },
    { nombre: 'Verduras encurtidas', descripcion: '' },
    { nombre: 'Guisantes y Níscalos', descripcion: '' },
    { nombre: 'Vieiras, Pepino y Salicornia', descripcion: '' },
    { nombre: 'Bonito en Escabeche', descripcion: '' },
    { nombre: 'Merluza al Mole', descripcion: '' },
    { nombre: 'Carrilleras a la Madeira', descripcion: '' },
  ];

  cartaCocteles = [
    { nombre: 'Mandarina + Caqui + Romero + Brandy', descripcion: '' },
    { nombre: 'Melon + Menta + Vodka', descripcion: '' },
    { nombre: 'Huma + Ron añejo + Romero + Carbonated Soy Syrup', descripcion: '' },
    { nombre: 'Ginebra + Pimienta', descripcion: '' },
    { nombre: 'Sirope de Lavanda + Ginebra', descripcion: '' },
    { nombre: 'Roasted Paprika Juice + Wisky', descripcion: '' },
    { nombre: 'Mezcal + Cilantro + Cordial Higo Jumbo', descripcion: '' },
    { nombre: 'Dashi + GinRoku + Kombu Caramelizado', descripcion: '' },
    { nombre: 'Tofee infused Vodka', descripcion: '' },
    { nombre: 'Limoncello + Narancello + Pomelocello', descripcion: '' },
    { nombre: 'Licor Coco + Martini + Caramelo Coco', descripcion: '' },
  ];
}