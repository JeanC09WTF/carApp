import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  categoria!: string;
  autos: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.categoria = params['categoria'];
      this.cargarDatos();
    });
  }

  cargarDatos() {
    const jsonFile = '../../assets/categorias/autos.json';

    this.http.get(jsonFile).subscribe(
      (data: any) => {
        // Verifica si la categoría existe en el JSON antes de acceder a ella
        if (data[this.categoria]) {
          this.autos = data[this.categoria];
        } else {
          console.error(`La categoría '${this.categoria}' no existe en el JSON.`);
          // Puedes redirigir a una página de error o manejarlo según tus necesidades
        }
      },
      (error) => {
        console.error(`Error cargando ${jsonFile}`, error);
        // Puedes redirigir a una página de error o manejarlo según tus necesidades
      }
    );
  }
}
