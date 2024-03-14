export class Chef {

    private _apellido: string;
    private _nombre: string;
    private _fechaNacimiento: Date;
    private _experienciaCulinaria: boolean;

    constructor(apellido: string, nombre: string, fechaNacimiento: Date, experienciaCulinaria: boolean) {
        this._apellido=apellido;
        this._nombre=nombre;
        this._fechaNacimiento=fechaNacimiento;
        this._experienciaCulinaria=experienciaCulinaria;
    }

    public get apellido(): string { return this._apellido; }
    public get nombre(): string { return this._nombre; }
    public get fechaNacimiento(): Date { return this._fechaNacimiento; }
    public get experienciaCulinaria(): boolean { return this._experienciaCulinaria; }

    public set apellido(apellido: string) { this._apellido=apellido; }
    public set nombre(nombre: string) { this._nombre=nombre; }
    public set fechaNacimiento(fechaNacimiento: Date) { this._fechaNacimiento=fechaNacimiento; }
    public set experienciaCulinaria(experienciaCulinaria: boolean) { this._experienciaCulinaria=experienciaCulinaria; }

}