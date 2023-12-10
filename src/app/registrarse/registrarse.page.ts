import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  token= 'dsgf24e2fsd';

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  registrarse(){
    localStorage.setItem('token', this.token)
    this.router.navigate(["/inicio"])
  }

}
