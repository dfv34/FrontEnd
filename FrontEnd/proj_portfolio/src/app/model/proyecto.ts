export class Proyecto {

    idPro? : number;
    nombrePro: string;
    fechaPro: number;
    descPro: string;
    imagenPro: string;

    constructor(nombrePro: string,fechaPro:number,descPro: string,imagenPro: string){

        this.nombrePro = nombrePro;
        this.fechaPro = fechaPro;
        this.descPro = descPro;
        this.imagenPro = imagenPro;

    }
}
