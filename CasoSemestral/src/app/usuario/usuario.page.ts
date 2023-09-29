import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlertController, AnimationController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  @ViewChild("imagen", { read: ElementRef, static: true }) titulo!: ElementRef;

  datos = [{
    usuario: "admin",
    clave: "1234"
  }, {
    usuario: "ampi",
    clave: "ampi"
  }]

  
  formularioLogin: FormGroup;
  constructor(
    public fb: FormBuilder,
    private animationCtrl: AnimationController,
    private alertController: AlertController,
    private router: Router,
  ) {
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'contrasena': new FormControl("", Validators.required)
    })
  }
  

  ngOnInit() {
    this.traslate();
  }

  async ingresar() {
    var f = this.formularioLogin.value;

    var nombreUsuario = localStorage.getItem('usuario');
    var contrasenaUsuario = localStorage.getItem('contrasena');

    if (this.formularioLogin.invalid) {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Debes ingresar todos los datos',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }
    let datos = localStorage.getItem("usuarios")!
    let array = JSON.parse(datos);
    for (let element of array) {
      if (element.usuario == f.nombre && element.clave == f.contrasena) {
        localStorage.setItem('autenticado', 'true');
        this.router.navigate(["/inicio"]);
        return
      }
    };
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: 'Datos incorrectos',
      buttons: ['OK']
    });

    await alert.present();
    return;
  }

  public traslate() {
    const animation = this.animationCtrl
      .create()
      .addElement(this.titulo.nativeElement)
      .duration(5000)
      .iterations(1)
      .keyframes([
        { offset: 0, transform: 'translateX(-100px) scale(0.5)', opacity: '1' },
        { offset: 0.4, transform: 'translateX(100px) scale(0.8)', opacity: '1' },
        { offset: 0.8, transform: 'translateX(-100px) scale(1)', opacity: '1' },
        { offset: 1, transform: 'translateX(0px) scale(1.2)', opacity: '1' }
      ])
      .onFinish(() => {
        this.crecer();
      });

    animation.play();
  }

  public crecer() {
    localStorage.setItem("usuarios", JSON.stringify(this.datos))
    const animation = this.animationCtrl
      .create()
      .addElement(this.titulo.nativeElement)
      .duration(5000)
      .iterations(Infinity)
      .fromTo('transform', 'scale3d(0.5,0.5,0.5)', 'scale3d(1.3,1.3,1.3)')
      .fromTo('opacity', '1', '0');

    animation.play();
  }
}
