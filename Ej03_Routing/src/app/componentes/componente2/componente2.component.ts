import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html'
})
export class Componente2Component implements OnInit {

  public dato1:any = ''
  public dato2:string = ''

  constructor(ruta:ActivatedRoute) { 

    this.dato1 = ruta.snapshot.params['dato1']
    this.dato2 = ruta.snapshot.params['dato2']

  }

  ngOnInit(): void {
  }

}



