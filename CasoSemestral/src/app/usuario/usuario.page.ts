import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  @ViewChild("imagen", { read: ElementRef, static: true }) titulo!: ElementRef;

  username: string = "";
  constructor(private animationCtrl: AnimationController,private router: Router) { }

  ngOnInit() {
    this.crecer();
  }

  onLogin() {
    this.router.navigate(['/inicio', { username: this.username }]);
  }

  public avanzarDerecha() {
    const animation = this.animationCtrl
      .create()
      .addElement(this.titulo.nativeElement)
      .duration(2000)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(200px)')
      .fromTo('opacity', '1', '0');

    animation.play();
  }

  public crecer() {
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
