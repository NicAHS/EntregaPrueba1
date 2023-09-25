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
    { title: 'usuario', url: '/usuario', icon: 'person' },
    { title: 'contacto', url: '/contacto', icon: 'call' },
    { title: 'servicio', url: '/servicio', icon: 'settings' },
  ];
  constructor(private router: Router,private toastController: ToastController,private menuController: MenuController) {}

  compartirApp(){
    Share.share({
      title: 'Compartit registrApp',
      url: 'https://definicion.de/wp-content/uploads/2017/04/descarga.png',
      dialogTitle: 'Compartir con'
    })
  }

  async cerrarSesion(){
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
