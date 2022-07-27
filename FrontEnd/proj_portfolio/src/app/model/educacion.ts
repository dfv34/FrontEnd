export class Educacion {
    
    idEdu? : number;
    tituloEdu: string;
    fechainicioEdu: number;
    fechafinEdu: number;
    descEdu: string;
    imagenEdu: string;

constructor(tituloEdu: string,fechainicioEdu:number,fechafinEdu:number,descEdu: string,imagenEdu: string){

    this.tituloEdu = tituloEdu;
    this.fechainicioEdu = fechainicioEdu;
    this.fechafinEdu = fechafinEdu;
    this.descEdu = descEdu;
    this.imagenEdu = imagenEdu;


}
}
