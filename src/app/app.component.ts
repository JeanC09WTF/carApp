import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [

    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Iniciar sesión', url: '/registrarse', icon: 'log-in' },
    { title: 'Nosotros', url: '/nosotros', icon: 'accessibility' },
    
  ];
  
  constructor() {}
}
