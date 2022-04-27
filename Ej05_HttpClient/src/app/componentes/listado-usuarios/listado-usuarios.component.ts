import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';
import { ServicioUsuarios } from 'src/app/servicios/servicio-usuarios';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html'
})
export class ListadoUsuariosComponent implements OnInit {

  public usuarios:any[] = []

  //Jamás de los jamases utilizaremos el objeto HttpClient desde un componente
  //Debe hacerse desde un servicio
  constructor(/*private httpClient:HttpClient,*/
              private servicioUsuarios:ServicioUsuarios) {
  }

  ngOnInit(): void {
  }

  public listarUsuarios():void{
    
    /*Con funciones
    let that = this 
    let observable:Observable<any> = this.httpClient.get("https://reqres.in/api/users?delay=2")
    observable.subscribe( {
        next  : function(respuesta) {
                  console.log("Respuesta:",respuesta.data)
                  that.usuarios = respuesta.data
                },
        error : function(err) {
                  console.log(err)
                }
      })
    */    

    /*Con funciones flecha:
    let observable:Observable<any> = this.httpClient.get("https://reqres.in/api/users?delay=2")
    observable.subscribe( {
        next  : respuesta => {
                  console.log("Respuesta:",respuesta.data)
                  this.usuarios = respuesta.data
                },
        error : err => console.log(err)
      })
    */       

    //Llamando al servicio
    this.servicioUsuarios.listarUsuarios()
      .subscribe({
        next  : respuesta => this.usuarios=respuesta,
        error : error => console.log(error)
      })

  }

}


/*

{
  "page": 1,
  "per_page": 6,
  "total": 12,
  "total_pages": 2,
  "data": [
    {
      "id": 1,
      "email": "george.bluth@reqres.in",
      "first_name": "George",
      "last_name": "Bluth",
      "avatar": "https://reqres.in/img/faces/1-image.jpg"
    },
    {
      "id": 2,
      "email": "janet.weaver@reqres.in",
      "first_name": "Janet",
      "last_name": "Weaver",
      "avatar": "https://reqres.in/img/faces/2-image.jpg"
    },
    {
      "id": 3,
      "email": "emma.wong@reqres.in",
      "first_name": "Emma",
      "last_name": "Wong",
      "avatar": "https://reqres.in/img/faces/3-image.jpg"
    },
    {
      "id": 4,
      "email": "eve.holt@reqres.in",
      "first_name": "Eve",
      "last_name": "Holt",
      "avatar": "https://reqres.in/img/faces/4-image.jpg"
    },
    {
      "id": 5,
      "email": "charles.morris@reqres.in",
      "first_name": "Charles",
      "last_name": "Morris",
      "avatar": "https://reqres.in/img/faces/5-image.jpg"
    },
    {
      "id": 6,
      "email": "tracey.ramos@reqres.in",
      "first_name": "Tracey",
      "last_name": "Ramos",
      "avatar": "https://reqres.in/img/faces/6-image.jpg"
    }
  ],
  "support": {
    "url": "https://reqres.in/#support-heading",
    "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
  }
}

*/