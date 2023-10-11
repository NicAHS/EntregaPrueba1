import { ActivatedRoute } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationController, MenuController } from '@ionic/angular';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  @ViewChild("qr", { read: ElementRef, static: true }) qrcode!: ElementRef;

  username: string | null = null;

  constructor(private route: ActivatedRoute,private animationCtrl: AnimationController) { }

  nombreUsuario = localStorage.getItem('usuario');

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');
    this.crecerTiritar();
  }

  public crecerTiritar() {
    const animation = this.animationCtrl
      .create()
      .addElement(this.qrcode.nativeElement)
      .duration(5000)
      .iterations(1)
      .fromTo('transform', 'scale3d(0.5,0.5,0.5)', 'scale3d(1.3,1.3,1.3)')
      .fromTo('opacity', '0', '1')
      .onFinish(() => {
        this.girar();
      });

    animation.play();
  }
  
  public girar() {
    const animationRotate = this.animationCtrl
      .create()
      .addElement(this.qrcode.nativeElement)
      .duration(5000)  // 2 seconds for a full rotation
      .iterations(1)
      .fromTo('transform', 'rotate(0deg)', 'rotate(360deg)')
      .iterations(Infinity)
      .fromTo('opacity', '1', '0.5')
  
    animationRotate.play();
  }


  public tiritar() {
    const shakeKeyframes = [
      { offset: 0, transform: 'translateX(0)' },
      { offset: 0.1, transform: 'translateX(-10px)' },
      { offset: 0.2, transform: 'translateX(10px)' },
      { offset: 0.3, transform: 'translateX(-10px)' },
      { offset: 0.4, transform: 'translateX(10px)' },
      { offset: 0.5, transform: 'translateX(-10px)' },
      { offset: 0.6, transform: 'translateX(10px)' },
      { offset: 0.7, transform: 'translateX(-10px)' },
      { offset: 0.8, transform: 'translateX(10px)' },
      { offset: 0.9, transform: 'translateX(-10px)' },
      { offset: 1, transform: 'translateX(10px)' }
    ];
  
    const animationShake = this.animationCtrl
      .create()
      .addElement(this.qrcode.nativeElement)
      .duration(5000)  // 500ms for the entire shake
      .iterations(3)  // shake 3 times
      .keyframes(shakeKeyframes);
  
    animationShake.play();
  }

  async scanQRCode() {
    try {
      const result = await BarcodeScanner.startScan();
      if (result.hasContent) {
        console.log(`Scanned content: ${result.content}`);
      }
    } catch (error) {
      console.error('QR scanning failed:', error);
    }
  }

}