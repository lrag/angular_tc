import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Disco } from 'src/app/entidades/disco';
import { DiscosService } from 'src/app/servicios/discos.service';

@Component({
  selector: 'app-formulario-discos',
  templateUrl: './formulario-discos.component.html'
})
export class FormularioDiscosComponent implements OnInit {

  //En lugar de tener un disco para unirlo al formulario con [(ngModel)]
  //tenemos un objeto del tipo FormGroup
  public formulario:FormGroup

  constructor(private formBuilder:FormBuilder,
              private router:Router,
              private discosService:DiscosService,
              activatedRoute:ActivatedRoute) { 

    //Tambien podemos crear el FormGroup con 'new'
    this.formulario = formBuilder.group({
      //Id no aparece en el formulario, pero los discos lo necesitan
      //y el objeto que le pasamos lo tiene
      id     : formBuilder.control(''),
      titulo : formBuilder.control('', [ Validators.required ]),
      grupo  : formBuilder.control('', [ Validators.required ]),
      year   : formBuilder.control('', [ Validators.required, Validators.pattern('^[0-9]{4}$') ]),
      genero : formBuilder.control(''),
      notas  : formBuilder.control('')    
    })

    let idDiscoSel = activatedRoute.snapshot.params['id']
    if(idDiscoSel){
      this.formulario.setValue(discosService.buscarDisco(idDiscoSel))
    }

    //this.formulario.markAllAsTouched()
  }

  ngOnInit(): void {
  }

  public insertarDisco():void{
    
    console.log("Value:",this.formulario.value)
    if(this.formulario.invalid){
      console.log("Datos invalidos")
      this.formulario.markAllAsTouched()
      return
    }

    //Cuando necesitamos los valores contenidos en el formGroup accedemos a su 'value'
    this.discosService.insertarDisco(this.formulario.value)
    //navegar al listado
    this.router.navigateByUrl("/listadoDiscos")
  }

  public modificarDisco():void{
    this.formulario.markAllAsTouched()
    if(this.formulario.invalid){
      return
    }

    this.discosService.modificarDisco(this.formulario.value)
    //navegar al listado
    this.router.navigateByUrl("/listadoDiscos")    
  }

  public borrarDisco():void{
    this.discosService.borrarDisco(this.formulario.value)
    //navegar al listado
    this.router.navigateByUrl("/listadoDiscos")    
  }

  public vaciarFormulario():void{
    this.formulario.setValue(new Disco())
    this.formulario.markAsUntouched()
  }

}
