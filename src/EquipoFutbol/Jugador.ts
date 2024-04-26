import { Club } from "./Club";
import { Provincia } from "./Provincia";

export abstract class Jugador {

    private _apellido: string;
    private _nombre: string;
    private _fechaNacimiento: Date;
    private _provincia: Provincia;
    private _historialEquipos: Set<Club>;
    private _numeroCamiseta: number;

    constructor(apellido: string, nombre: string, fechaNacimiento: Date, provincia: Provincia, historialEquipos: Set<Club>, numeroCamiseta: number) {
        this._apellido = apellido;
        this._nombre = nombre;
        this._fechaNacimiento = fechaNacimiento;
        this._provincia = provincia;
        this._historialEquipos = historialEquipos;
        this._numeroCamiseta = numeroCamiseta;
    }

    public get apellido(): string { return this._apellido; }
    public set apellido(apellido: string) { this._apellido = apellido; }
    public get nombre(): string { return this._nombre; }
    public set nombre(nombre: string) { this._nombre = nombre; }
    public get fechaNacimiento(): Date { return this._fechaNacimiento; }
    public set fechaNacimiento(fechaNacimiento: Date) { this._fechaNacimiento = fechaNacimiento; }
    public get provincia(): Provincia { return this._provincia; }
    public set provincia(provincia: Provincia) { this._provincia = provincia; }
    public get historialEquipos(): Set<Club> { return this._historialEquipos; }
    public set historialEquipos(historialEquipos: Set<Club>) { this._historialEquipos = historialEquipos; }
    public get numeroCamiseta(): number { return this._numeroCamiseta; }
    public set numeroCamiseta(numeroCamiseta: number) { this._numeroCamiseta = numeroCamiseta; }
    
}