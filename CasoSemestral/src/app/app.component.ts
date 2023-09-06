import { Component } from '@angular/core';
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
  constructor() {}
}
