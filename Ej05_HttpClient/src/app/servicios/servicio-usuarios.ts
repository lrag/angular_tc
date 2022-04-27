import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, switchMap } from "rxjs/operators";


@Injectable( { providedIn : 'root' } )
export class ServicioUsuarios {

    public constructor(private httpClient:HttpClient){
    }

    public listarUsuariosData():Observable<any> {
        return this.httpClient.get("https://reqres.in/api/users")
    }

    public listarUsuarios():Observable<any> {        
        return new Observable( subscriptores => {
            this
                .httpClient
                .get("https://reqres.in/api/users")
                .subscribe({
                    next : (respuesta:any) => subscriptores.next(respuesta.data),
                    error: (error) => subscriptores.error(error)
                })
        })
    }

    public listarUsuariosPipe():Observable<any> {        
        //RXJs
        return this
                .httpClient
                .get("https://reqres.in/api/users")
                .pipe(
                    tap( (respuesta:any) => console.log("Antes:",respuesta)),
                    map( (respuesta:any) => respuesta.data ),
                    tap( (usuarios:any) => console.log("Despues:",usuarios)),
                    map( (usuarios:any) => {
                            for(let usuario of usuarios) {
                                usuario.first_name = usuario.first_name.toUpperCase() 
                                usuario.last_name = usuario.last_name.toUpperCase() 
                            }
                            return usuarios
                        } ),
                    tap(usuariosMayusculas => console.log(usuariosMayusculas))
                )
    }


    public listarUsuariosPipeSinFlorituras():Observable<any> {        
        return this
            .httpClient
            .get("https://reqres.in/api/users")
            .pipe(
                map( (respuesta:any) => respuesta.data ),                
            )
    }

    /*
    public listarClientes():Observable<any>{
        return this
            .httpClient
            .get("http://servicio/clientes")
            .pipe(
                map( (respuestaGenerica:any) => respuestaGenerica.datos.valor)
            )
    }
    
    public buscarCliente(id:number):Observable<any>{
        return this
            .httpClient
            .get("http://servicio/clientes/"+id)
            .pipe(
                map( (respuestaGenerica:any) => respuestaGenerica.datos.valor)
            )        
    }
    */

    public listarFacturasCliente(idCliente:number):Observable<any>{
        return this.httpClient
            .get("http://localhost:7000/clientes/"+idCliente)
            .pipe(
                switchMap( cliente => this.httpClient.get(`get /clientes/${idCliente}/facturas`)),
                tap( x => console.log(x) )
            )
    }

}