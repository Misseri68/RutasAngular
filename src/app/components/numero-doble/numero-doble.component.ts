import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-numero-doble',
  templateUrl: './numero-doble.component.html',
})

export class NumeroDobleComponent implements OnInit{
  public numero!: number;
  public doble!: number;

  constructor(private _activeRoute: ActivatedRoute, private _router: Router){

  }

  goToHome():void{
    this._router.navigate(['/'])
  }

  redirect(num:number):void{
    this._router.navigate(["/numerodoble", num])
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros: Params )=>{
      if(parametros['num'] != null) this.numero = parametros['num']
      this.doble = this.numero * 2;
    })
  }

}
