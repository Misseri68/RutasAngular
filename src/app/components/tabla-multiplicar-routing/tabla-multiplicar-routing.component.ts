import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tabla-multiplicar-routing',
  templateUrl: './tabla-multiplicar-routing.component.html',
  
})
export class TablaMultiplicarRoutingComponent {
  public numero!: number;
  public numeros!: Array<number>;


  constructor(private _activeRoute: ActivatedRoute){
    this.numeros = new Array<number>();
  }   

  ngOnInit() :void{
      this._activeRoute.params.subscribe((parametros: Params) => {
      this.numero = parseInt(parametros['num']);
      this.generarTabla();
    });
  }

  generarTabla() :void{
    let aux = new Array<number>();
    for (let i = 0; i <= 10; i++) {
      var resultado = this.numero * i;
      aux.push(resultado);
    }
    this.numeros = aux;
  }
}
