import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-tabla',
  templateUrl: './menu-tabla.component.html',
})
export class MenuTablaComponent {

  public numeroRandom: Array<number>;

  constructor() {
    this.numeroRandom = new Array<number>();
    for (let i = 0; i < 5; i++) {
      let random = Math.floor(Math.random() * 100 )+1;
      this.numeroRandom.push(random);
    }
  }
}
