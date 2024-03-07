import { Chef } from "./Chef";
import { Tipo } from "./Tipo";
export class Plato {
    nombre: string;
    descripcion: string;
    precio: number;
    tipo: Tipo;
    chef: Chef;
    constructor(nombre: string, descripcion: string, precio: number, tipo: Tipo, chef: Chef) {
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.precio=precio;
        this.tipo=tipo;
        this.chef=chef;
    }
    public getNombre(): string { return this.nombre; }
    public getDescripcion(): string { return this.descripcion; }
    public getPrecio(): number { return this.precio; }
    public getTipo(): Tipo { return this.tipo; }
    public getChef(): Chef { return this.chef; }
    public setNombre(nombre: string): void { this.nombre=nombre; }
    public setDescripcion(descripcion: string): void { this.descripcion=descripcion; }
    public setPrecio(precio: number): void { this.precio=precio; }
    public setTipo(tipo: Tipo): void { this.tipo=tipo; }
    public setChef(chef: Chef): void { this.chef=chef; }
}