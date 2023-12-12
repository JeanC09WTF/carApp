import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  token= 'dsgf24e2fsd';

  constructor( private router: Router, public toastController: ToastController ) { }

  ngOnInit() {
  }
  /**Funcion de registrarse*/
  registrarse(){
    localStorage.setItem('token', this.token)
    this.router.navigate(["/inicio"])
  }
/**Alerta de registro*/
  async presentToast1(){
    const toast = await this.toastController.create({
      message: 'Registro Exitoso',
      duration: 2000,
      position: "middle",
    });
    toast.present()
  }

}
