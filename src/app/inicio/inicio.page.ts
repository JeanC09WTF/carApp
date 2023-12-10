import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  currentImageIndex: number = 0;
  images: string[] = [
    'assets/img/car.jpg',
    'assets/img/car2.jpg',
    'assets/img/car3.jpg',
    'assets/img/car4.jpg',
    'assets/img/car5.jpg',
    // Agrega más rutas de imágenes según sea necesario
  ];
  currentImage: string = '';

  popularCategories = [
    {
      title: 'Autos Tecnologicos',
      image: 'assets/img2/tec1.jpg',
      description: 'Explora nuestra selección de autos deportivos y Tecnologicos.'
    },
    {
      title: 'Familiares',
      image: 'assets/img2/auto1.jpg',
      description: 'Encuentra el auto perfecto para toda la familia.'
    },
    {
      title: 'Para aventureros',
      image: 'assets/img2/ave1.jpg',
      description: 'Si lo que necesitas es un todoterreno robusto y capaz de enfrentarse a terrenos difíciles.'
    },
    {
      title: 'Ahorrativos',
      image: 'assets/img2/com.jpg',
      description: 'Tenemos los maravillos autos ahorrativos y electricos.'
    },
    // Agrega más categorías según sea necesario
  ];


  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
    this.startImageTransition();
  }

  irASeleccion() {
    this.router.navigate(['/busqueda']);
  }

  startImageTransition() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      this.currentImage = this.images[this.currentImageIndex];
    }, 3000); // Cambia la imagen cada 3 segundos (ajusta según sea necesario)
  }
}
