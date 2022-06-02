import { Component, OnInit } from '@angular/core';

interface MenuItem{
  ruta:string,
  nombre:string,
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  menuItems: MenuItem[]=[
    {
      ruta: '/home',
      nombre: 'Inicio'
    },
    {
      ruta: '/home/generaciones',
      nombre: 'Items'
    },
  ]

  cerrarSesion(){
    localStorage.removeItem('token');
    location.reload();
  }
}
