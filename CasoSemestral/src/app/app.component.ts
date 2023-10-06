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
    { title: 'Contacto', url: '/contacto', icon: 'call' },
    { title: 'Servicio', url: '/servicio', icon: 'settings' },
    { title: 'Asistencia', url: '/asistencia', icon: 'calendar' },
    { title: 'Mapa', url: '/mapa', icon: 'map' },
    { title: 'Principal', url: '/principal', icon: 'person' },
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
      title: 'Compartit registrApp',
      url: 'https://definicion.de/wp-content/uploads/2017/04/descarga.png',
      dialogTitle: 'Compartir con'
    })
  }

  async cerrarSesion(){
    localStorage.setItem('autenticado', 'false');
    this.menuController.close();
    this.router.navigateByUrl('/usuario');

    const toast = await this.toastController.create({
      message: 'Cerrando sesión',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

}
