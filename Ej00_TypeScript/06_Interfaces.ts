//////////////
//Interfaces//
//////////////

//El nombre de la interfaz, por convenio, va en Pascal case (uppercamel case)
//Una interfaz es un contrato que deben cumplir los objetos 

//Definimos el tipo 'Avion'
interface Avion {
    id:number,
    fabricante:string,
    modelo:string,
    year:number
    //Tambien podemos definir firmas de funciones
}

//Si hemos definido un nuevo tipo ya podemos crear variables del tipo Avion
let a1:Avion = {
    id : 1,
    fabricante : 'Mig',
    modelo : '29',
    year : 1979
}

/*
//No transpila:
let a2:Avion = {
    id : 1,
    fabricante : 'Mig',
    //modelo : '29',
    year : 1979
}

//No transpila:
let a3:Avion = {
    id : 1,
    fabricante : 'Mig',
    modelo : '29',
    year : 1979,
    movida : "???"
}
*/

//La variable a3 no es del tipo 'Avion' pero si tiene las caracterÃ­sticas necesarias para serlo
let a3 = {
    id : 1,
    fabricante : 'Mig',
    modelo : '29',
    year : 1979
}
//Podemos asignarla a una variable del tipo 'Avion'
let a4:Avion = a3;

//Esto implica que podemos, por ejemplo, obtener un objeto del tipo Avion 
//a partir de un JSON (en realidad nos están dando cuartelillo)
let json = JSON.stringify(a3)
let a5:Avion = JSON.parse(json)

////////////////////////////////////////////////////////////

interface EmisorMensaje {
    enviar:(mensaje:string, destinatario:string) => boolean
}


class EmisorMensajeCorreoE implements EmisorMensaje{
    public enviar(mensaje:string, destinatario:string):boolean{
        //Enviar un correoE
        return true
    }
}

class EmisorMensajeSMS implements EmisorMensaje{
    public enviar(mensaje:string, destinatario:string):boolean{
        //Enviar un correoE
        return true
    }
}

class EmisorMensajePalomaMensajera implements EmisorMensaje{
    public enviar(mensaje:string, destinatario:string):boolean{
        //Enviar un correoE
        return true
    }
}

console.log("FIN")


