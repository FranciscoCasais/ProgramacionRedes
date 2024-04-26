import { Club } from "./Club";
import { Jugador } from "./Jugador";
import { Provincia } from "./Provincia";

export class JugadorCampo extends Jugador {

    private _cantidadTiros: number;
    private _golesAnotados: number;
    private _asistenciasRealizadas: number;

    constructor(apellido: string, nombre: string, fechaNacimiento: Date, provincia: Provincia, historialEquipos: Set<Club>, numeroCamiseta: number, cantidadTiros: number, golesAnotados: number, asistenciasRealizadas: number) {
        super(apellido, nombre, fechaNacimiento, provincia, historialEquipos, numeroCamiseta);
        this._cantidadTiros = cantidadTiros;
        this._golesAnotados = golesAnotados;
        this._asistenciasRealizadas = asistenciasRealizadas;
    }

    public get cantidadTiros(): number { return this._cantidadTiros; }
    public set cantidadTiros(cantidadTiros: number) { this._cantidadTiros = cantidadTiros; }
    public get golesAnotados(): number { return this._golesAnotados; }
    public set golesAnotados(golesAnotados: number) { this._golesAnotados = golesAnotados; }
    public get asistenciasRealizadas(): number { return this._asistenciasRealizadas; }
    public set asistenciasRealizadas(asistenciasRealizadas: number) { this._asistenciasRealizadas = asistenciasRealizadas; }

}