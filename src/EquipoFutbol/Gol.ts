import { Jugador } from "./Jugador";

export class Gol {
    
    private _minuto: number;
    private _autor: Jugador;
    private _asistidor: Jugador;

    constructor(minuto: number, autor: Jugador, asistidor: Jugador) {
        this._minuto = minuto;
        this._autor = autor;
        this._asistidor = asistidor;
    }

    public get minuto(): number { return this._minuto; }
    public set minuto(minuto: number) { this._minuto = minuto; }
    public get autor(): Jugador { return this._autor; }
    public set autor(autor: Jugador) { this._autor = autor; }
    public get asistidor(): Jugador { return this._asistidor; }
    public set asistidor(asistidor: Jugador) { this._asistidor = asistidor; }
    
}