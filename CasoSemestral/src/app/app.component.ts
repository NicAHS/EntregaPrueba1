import { Component } from '@angular/core';
import { Share } from '@capacitor/share';
import { Router } from '@angular/router';
import { MenuController,ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  public appPages = [
    { title: 'Usuario', url: '/usuario', icon: 'person' },
    { title: 'Principal', url: '/principal', icon: 'home' },
    { title: 'Contacto', url: '/contacto', icon: 'call' },
    { title: 'Asistencia', url: '/asistencia', icon: 'calendar' },
    { title: 'Mapa', url: '/mapa', icon: 'map' },
    { title: 'Registrar Asistencia', url: '/inicio', icon: 'calendar' },
    { title: 'Clima', url: '/clima', icon: 'sunny' },
  ];
  constructor(private router: Router,private toastController: ToastController,private menuController: MenuController,
    private menu: MenuController) {}

  autenticado = ""

  ngOnInit(){
    this.autenticado = localStorage.getItem('autenticado')!
  }
  abrirMapa() {
    this.router.navigate(["/mapa"]);
    this.menu.close();
  }
  compartirApp(){
    Share.share({
      title: 'Compartir registrApp',
      url: 'https://definicion.de/wp-content/uploads/2017/04/descarga.png',
      dialogTitle: 'Compartir con'
    })
  }

  cerrarSesion(){
    localStorage.removeItem('autenticado');
    this.router.navigate(["/usuario"]);
    this.menu.close();
  }

}
