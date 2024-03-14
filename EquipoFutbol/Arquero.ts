import { Club } from "./Club";
import { Jugador } from "./Jugador";
import { Provincia } from "./Provincia";

export class Arquero extends Jugador {

    private _cantidadAtajadas: number;
    private _golesRecibidos: number;

    constructor(apellido: string, nombre: string, fechaNacimiento: Date, provincia: Provincia, historialEquipos: Set<Club>, numeroCamiseta: number, cantidadAtajadas: number, golesRecibidos: number) {
        super(apellido, nombre, fechaNacimiento, provincia, historialEquipos, numeroCamiseta);
        this._cantidadAtajadas=cantidadAtajadas;
        this._golesRecibidos=golesRecibidos;
    }

    public get cantidadAtajadas(): number { return this._cantidadAtajadas; }
    public set cantidadAtajadas(cantidadAtajadas: number) { this._cantidadAtajadas = cantidadAtajadas; }
    public get golesRecibidos(): number { return this._golesRecibidos; }
    public set golesRecibidos(golesRecibidos: number) { this._golesRecibidos = golesRecibidos; }

}