import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(private router: Router, public fb: FormBuilder, private alertController: AlertController) {
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'apellido': new FormControl("", Validators.required),
      'correo': new FormControl("", Validators.required),
      'contrasena': new FormControl("", Validators.required),
      'c_contrasena': new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
  }

  async registrar() {
    var f = this.formularioLogin.value;

    if (this.formularioLogin.invalid) {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Debes ingresar todos los datos',
        buttons: ['OK']
      });

      await alert.present();
      return;
    } else if (f.contrasena != f.c_contrasena) {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Las contraseñas no coinciden',
        buttons: ['OK']
      });

      await alert.present();
      return;
    } else {
      var nombreUsuario = f.nombre;
      var contrasenaUsuario = f.contrasena;
      var correoUsuario = f.correo;

      localStorage.setItem('nombreUsuario', nombreUsuario);
      localStorage.setItem('contrasenaUsuario', contrasenaUsuario);
      localStorage.setItem('correoUsuario', correoUsuario);

      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Registrado correctamente',
        buttons: ['OK']
      });

      await alert.present();      
      this.router.navigate(["/usuario"]);
    }
  }
}