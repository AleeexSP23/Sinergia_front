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
      nombre: 'Sopa de Pimentón',
      descripcion: 'Decripción por determinar',
      imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/55/3b/a6/nodrama.jpg?w=1000&h=-1&s=1'
    },
    {
      nombre: 'Esfrérico de Morcilla',
      descripcion: 'Decripción por determinar',
      imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/55/3b/9a/nodrama.jpg?w=1000&h=-1&s=1'
    },
    {
      nombre: 'Gravadlax',
      descripcion: 'Decripción por determinar',
      imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/55/3b/91/nodrama.jpg?w=1000&h=-1&s=1'
    },
    {
      nombre: 'Krupuk Codium',
      descripcion: 'Decripción por determinar',
      imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/55/3b/8e/nodrama.jpg?w=1000&h=-1&s=1'
    },
    {
      nombre: 'Mejillones rellenos',
      descripcion: 'Decripción por determinar',
      imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/55/3b/8c/nodrama.jpg?w=1000&h=-1&s=1'
    },
    {
      nombre: 'Tartaleta de Salmón',
      descripcion: 'Decripción por determinar',
      imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/55/3b/7a/nodrama.jpg?w=1000&h=-1&s=1'
    },
    {
      nombre: 'Verduras encurtidas',
      descripcion: 'Decripción por determinar',
      imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/55/3b/79/nodrama.jpg?w=1000&h=-1&s=1'
    },
    {
      nombre: 'Guisantes y Níscalos',
      descripcion: 'Decripción por determinar',
      imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/55/3b/77/nodrama.jpg?w=1000&h=-1&s=1'
    },
    {
      nombre: 'Vieiras, Pepino y Salicorna',
      descripcion: 'Decripción por determinar',
      imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/66/07/9d/caption.jpg?w=1000&h=-1&s=1'
    },
    {
      nombre: 'Bonito en escabeche',
      descripcion: 'Decripción por determinar',
      imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/66/07/9c/caption.jpg?w=1000&h=-1&s=1'
    },
    {
      nombre: 'Merluza al Mole',
      descripcion: 'Decripción por determinar',
      imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/66/07/98/caption.jpg?w=1000&h=-1&s=1'
    },
    {
      nombre: 'Carrilleras a la Madeira',
      descripcion: 'Decripción por determinar',
      imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/78/07/5a/caption.jpg?w=1000&h=-1&s=1'
    },
  ];

  // Carta de cócteles con imagen y descripción
  cartaCocteles: Plato[] = [
    {
      nombre: 'Mandarina + Caqui + Romero + Brandy',
      descripcion: 'Decripción por determinar',
      imagen: 'https://www.gastroactitud.com/wp-content/uploads/2022/08/manhattan-apertura.jpg'
    },
    {
      nombre: 'Melon + Menta + Vodka',
      descripcion: 'Decripción por determinar',
      imagen: 'https://www.gastroactitud.com/wp-content/uploads/2022/08/daiquiri-ok.jpg'
    },
    {
      nombre: 'Humo + Ron añejo + Romero + Carbonated soy syrup',
      descripcion: 'Decripción por determinar',
      imagen: 'https://www.gastroactitud.com/wp-content/uploads/2022/08/old-fashioned.jpg'
    },
    {
      nombre: 'Ginebra + Pimienta',
      descripcion: 'Decripción por determinar',
      imagen: 'https://www.gastroactitud.com/wp-content/uploads/2022/08/dry-martini.jpg'
    },
    {
      nombre: 'Syrup lavender + Ginebra',
      descripcion: 'Decripción por determinar',
      imagen: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_600/https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300/https://www.bedoyahosteleria.es/wp-content/uploads/2017/07/Dise%C3%B1o-sin-t%C3%ADtulo-1.png'
    },
    {
      nombre: 'Roasted paprika juice + Wisky',
      descripcion: 'Decripción por determinar',
      imagen: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_600/https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300/https://www.bedoyahosteleria.es/wp-content/uploads/2017/07/Dise%C3%B1o-sin-t%C3%ADtulo-2.png'
    },
    {
      nombre: 'Mezcal + Cilantro + Cordial higo jumbo',
      descripcion: 'Decripción por determinar',
      imagen: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_600/https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300/https://www.bedoyahosteleria.es/wp-content/uploads/2017/07/Dise%C3%B1o-sin-t%C3%ADtulo-8.png'
    },
    {
      nombre: 'Dashi + GinRoku + Kombu caramelizado',
      descripcion: 'Decripción por determinar',
      imagen: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_600/https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300/https://www.bedoyahosteleria.es/wp-content/uploads/2017/07/Dise%C3%B1o-sin-t%C3%ADtulo-5.png'
    },
    {
      nombre: 'Tofee infused vodka',
      descripcion: 'Decripción por determinar',
      imagen: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_600,h_406/https://www.bedoyahosteleria.es/wp-content/uploads/2017/07/melon-2438503_960_720-e1499420842955.jpg'
    },
    {
      nombre: 'Limoncello + Narancello + Pomelocello',
      descripcion: 'Decripción por determinar',
      imagen: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_600/https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300/https://www.bedoyahosteleria.es/wp-content/uploads/2017/07/Dise%C3%B1o-sin-t%C3%ADtulo.png'
    },
    {
      nombre: 'Licor coco + Martini + Caramelo coco',
      descripcion: 'Decripción por determinar',
      imagen: 'https://hosteleriauno.es/blog/wp-content/uploads/2022/06/mejores-cocteles-verano.jpg'
    },
    {
      nombre: 'Licor coco + Martini + Caramelo coco',
      descripcion: 'Decripción por determinar',
      imagen: 'https://level5th.com/wp-content/uploads/kyryll-ushakov-1057516-unsplash_opt.jpg'
    },
  ];
}