import { FormGroup } from "@angular/forms";


export class Disco  {
    
    public constructor(
            public id    :number|any = null,
            public titulo:string|any = null,
            public grupo :string|any = null,
            public year  :number|any = null,
            public genero:string|any = null,
            public notas :string|any = null
        ){}  

}
