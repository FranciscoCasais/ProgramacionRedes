import { Jugador } from "./Jugador";

export class Club {

    private _nombre: string;
    private _jugadores: Set<Jugador>;

    constructor(nombre: string, jugadores: Set<Jugador>) {
        this._nombre = nombre;
        this._jugadores = jugadores;
    }

    public get nombre(): string { return this._nombre; }
    public set nombre(nombre: string) { this._nombre = nombre; }
    public get jugadores(): Set<Jugador> { return this._jugadores; }
    public set jugadores(jugadores: Set<Jugador>) { this._jugadores = jugadores; }
    
}