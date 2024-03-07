export class Chef {
    apellido: string;
    nombre: string;
    fechaNacimiento: Date;
    experienciaCulinaria: boolean;
    constructor(apellido: string, nombre: string, fechaNacimiento: Date, experienciaCulinaria: boolean) {
        this.apellido=apellido;
        this.nombre=nombre;
        this.fechaNacimiento=fechaNacimiento;
        this.experienciaCulinaria=experienciaCulinaria;
    }
    public getApellido(): string { return this.apellido; }
    public getNombre(): string { return this.nombre; }
    public getFechaNacimiento(): Date { return this.fechaNacimiento; }
    public getExperienciaCulinaria(): boolean { return this.experienciaCulinaria; }
    public setApellido(apellido: string): void { this.apellido=apellido; }
    public setNombre(nombre: string): void { this.nombre=nombre; }
    public setFechaNacimiento(fechaNacimiento: Date): void { this.fechaNacimiento=fechaNacimiento; }
    public setExperienciaCulinaria(experienciaCulinaria: boolean): void { this.experienciaCulinaria=experienciaCulinaria; }
}