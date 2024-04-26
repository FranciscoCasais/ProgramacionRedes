import { Chef } from "./Chef";
import { Tipo } from "./Tipo";

export class Plato {

    private _nombre: string;
    private _descripcion: string;
    private _precio: number;
    private _tipo: Tipo;
    private _chef: Chef;

    constructor(nombre: string, descripcion: string, precio: number, tipo: Tipo, chef: Chef) {
        this._nombre=nombre;
        this._descripcion=descripcion;
        this._precio=precio;
        this._tipo=tipo;
        this._chef=chef;
    }

    public get nombre(): string { return this._nombre; }
    public get descripcion(): string { return this._descripcion; }
    public get precio(): number { return this._precio; }
    public get tipo(): Tipo { return this._tipo; }
    public get chef(): Chef { return this._chef; }

    public set nombre(nombre: string) { this._nombre=nombre; }
    public set descripcion(descripcion: string) { this._descripcion=descripcion; }
    public set precio(precio: number) { this._precio=precio; }
    public set tipo(tipo: Tipo) { this._tipo=tipo; }
    public set chef(chef: Chef) { this._chef=chef; }

}