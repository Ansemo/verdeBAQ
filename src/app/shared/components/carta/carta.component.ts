import { Component, Input, OnInit } from '@angular/core';
import { Carta } from 'src/app/interface/carta.interface';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss'],
})
export class CartaComponent implements OnInit {
  @Input() carta: Carta = {
    id: '',
    nivel: 0,
    desbloquea: [],
    imagen: '',
    descripcion: '',
  }; 

  showText = false;

  constructor() {}

  ngOnInit(): void {}

  toggleCard() {
    this.showText = !this.showText;
  }
}
