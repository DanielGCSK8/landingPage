import { Component } from '@angular/core';

@Component({
  selector: 'app-content-page',
  standalone: true,
  imports: [],
  templateUrl: './content-page.component.html',
  styleUrl: './content-page.component.css'
})
export class ContentPageComponent {
  destinos = [
    {
      id: 1,
      nombre: 'La macarena',
      precio: 130000,
      img: 'assets/d1.jpg'
    },
    {
      id: 2,
      nombre: 'Nuquí',
      precio: 197000,
      img: 'assets/d2.jpg'
    },
    {
      id: 3,
      nombre: 'Quibdó',
      precio: 184900,
      img: 'assets/d3.jpg'
    }
  ]

  status = false;

  changeDescription() {
    this.status = !this.status;
  }
}
