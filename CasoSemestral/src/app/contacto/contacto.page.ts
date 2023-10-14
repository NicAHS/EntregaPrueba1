import { Component, OnInit, ViewChild} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IonTextarea } from '@ionic/angular';



@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  constructor(private router: Router,private alertController: AlertController) { }
  
  @ViewChild('Texto', { static: false }) Texto!: IonTextarea;
  
  ngOnInit() {
  }

  async enviarFormulario(){
    const texto = this.Texto.value;
    if (!texto || texto.trim() === '') {
      const alert = await this.alertController.create({
        header: 'Advertencia',
        message: 'El área de texto está vacía. Por favor rellene el formulario antes de enviar',
        buttons: ['Aceptar']
      });
      await alert.present();
      return; 
    }else{
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'El formulario ha sido enviado correctamente.',
        buttons: ['Aceptar']
      });
      await alert.present();
      this.router.navigate(["/usuario"]);
      return;
    }
  }

}
