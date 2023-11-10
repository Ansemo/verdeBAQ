import { Component, OnInit } from '@angular/core';
import { Carta } from 'src/app/interface/carta.interface';

@Component({
  selector: 'app-test-cartas',
  templateUrl: './test-cartas.component.html',
  styleUrls: ['./test-cartas.component.scss'],
})
export class TestCartasComponent implements OnInit {
  cartas: Carta[];
  maxCartasActivas = 5;

  constructor() {
    this.cartas = Cartas.cartas
  }
  
  ngOnInit(): void {}

  toggleCarta(id: string) {
    const carta = this.cartas.find((c) => c.id === id);
    if (carta) {
      if (carta.activa) {
        this.desactivarCartaYHijas(carta);
      } else if (this.contarCartasActivas() < this.maxCartasActivas) {
        carta.activa = true;
        carta.cartasHijas = carta.desbloquea
          .map((idHijo) => this.cartas.find((c) => c.id === idHijo && !c.activa)) 
          .filter((c) => c !== undefined) as Carta[];
      }
    }
  }
  

  desactivarCartaYHijas(carta: Carta) {
    carta.activa = false;
    if (carta.cartasHijas) {
      carta.cartasHijas.forEach((cartaHija) =>
        this.desactivarCartaYHijas(cartaHija)
      );
    }
  }

  contarCartasActivas(): number {
    return this.cartas.filter((c) => c.activa).length;
  }

  onCartaHijaClick(idHijo: string) {
    this.toggleCarta(idHijo);
  }
}

const Cartas = {
  cartas: [
    {
      id: 'acuatico',
      nivel: 1,
      desbloquea: ['reptiles', 'peces', 'delfines'],
      imagen:
        'https://www.lasillavacia.com/wp-content/uploads/2021/11/Mallorquin1.jpg',
      descripcion: 'Explora la riqueza acuática de la Ciénaga de Mallorquín.',
    },
    
    {
      id: 'reptiles',
      nivel: 2,
      desbloquea: ['caiman'],
      requisitos: ['acuatico'],
      imagen:
        'https://agua.org.mx/wp-content/uploads/2017/02/mangroves_punta-allen.jpg',
      descripcion:
        'Descubre los reptiles que habitan en los manglares y las aguas dulces.',
    },
    {
      id: 'peces',
      nivel: 2,
      desbloquea: ['pez-leon'],
      requisitos: ['acuatico'],
      imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Oreochromis_mossambicus.jpg/1200px-Oreochromis_mossambicus.jpg',
      descripcion: 'Encuentra las especies de peces que viven en la Ciénaga.',
    },
    {
      id: 'delfines',
      nivel: 2,
      desbloquea: [],
      requisitos: ['acuatico'],
      imagen:
        'https://peru.info/archivos/publicacion/170-imagen-151611372018.jpg',
      descripcion: 'Observa los delfines en su hábitat natural.',
    },
    {
      id: 'caiman',
      nivel: 3,
      desbloquea: [],
      requisitos: ['reptiles'],
      imagen:
        'https://i0.wp.com/elrotativocaribe.com/wp-content/uploads/2020/08/caiman-aguja.jpg?fit=730%2C450&ssl=1',
      descripcion: 'Aventúrate a ver de cerca al caimán del Magdalena.',
    },
    {
      id: 'pez-leon',
      nivel: 3,
      desbloquea: [],
      requisitos: ['peces'],
      imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Strahlenfeuerfisch.jpg/1200px-Strahlenfeuerfisch.jpg',
      descripcion:
        'Aprende sobre el pez león, una especie invasora en el Caribe.',
    },





    {
      state: false,
      id: 'malecon',
      nivel: 1,
      desbloquea: [],
      imagen:
        'https://www.elpais.com.co/resizer/vKNv5yZo0mpX6Ol9E5mr2FFCS6I=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/TS6NCIQTEFDHXA7SIQLFDEB2X4.jpg',
      descripcion: 'Explora la riqueza acuática de la Ciénaga de Mallorquín.',
    },
    {
      state: false,
      id: 'tren',
      nivel: 1,
      desbloquea: [],
      imagen:
        'https://regioncaribe.com.co/wp-content/uploads/2020/01/Distrito-invertir%C3%A1-80-mil-millones-en-la-recuperaci%C3%B3n-de-la-Cienaga-de-Mallorqu%C3%ADn-03.jpg',
      descripcion: 'Explora la riqueza acuática de la Ciénaga de Mallorquín.',
    },
    {
      state: false,
      id: 'aves',
      nivel: 1,
      desbloquea: [],
      imagen:
        'https://i.pinimg.com/originals/ea/2f/82/ea2f82a6b9340dfe468f620056614025.jpg',
      descripcion: 'Explora la riqueza acuática de la Ciénaga de Mallorquín.',
    },
  ],
};
