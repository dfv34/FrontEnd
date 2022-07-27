export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    img: String;
    sobre_mi!: String;

    constructor(nombre: String,apellido: String, img: String, sobre_mi: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.sobre_mi;
    }

}