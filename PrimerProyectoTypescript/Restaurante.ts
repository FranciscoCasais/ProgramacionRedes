import { Chef } from "./Chef";
import { Plato } from "./Plato";
export class Restaurante {
    nombre: string;
    menu: Set<Plato>;
    chefs: Set<Chef>;
    constructor(nombre: string, menu: Set<Plato>, chefs: Set<Chef>) {
        this.nombre=nombre;
        this.menu=menu;
        this.chefs=chefs;
    }
    public getNombre(): string { return this.nombre; }
    public getMenu(): Set<Plato> { return this.menu; }
    public getChefs(): Set<Chef> { return this.chefs; }
    public setNombre(nombre: string): void { this.nombre=nombre; }
    public setMenu(menu: Set<Plato>): void { this.menu=menu; }
    public setChefs(chefs: Set<Chef>): void { this.chefs=chefs; }
    public agregarChef(chef: Chef): void {
        if(chef.getExperienciaCulinaria() && (new Date().getFullYear()-chef.getFechaNacimiento().getFullYear()>18 || new Date().getMonth()>chef.getFechaNacimiento().getMonth() || new Date().getDate()>=chef.getFechaNacimiento().getDate())) {
            this.chefs.add(chef);
            // console.log("El chef "+chef.getNombre()+" "+chef.getApellido()+" se unió al equipo de "+this.nombre+".");
        } else if(!chef.getExperienciaCulinaria()) throw new ChefSinExperienciaException("El chef no puede ser contratado porque no tiene experiencia culinaria previa.");
        else throw new ChefMenorDeEdadException("Error: el chef no puede ser contratado porque es menor de edad.");
    }
    public agregarPlato(plato: Plato) {
        if(!this.menu.has(plato) && this.chefs.has(plato.getChef())) {
            this.menu.add(plato);
            // console.log("El plato "+plato.getNombre()+" se agregó al menú de "+this.nombre+".");
        } else if(this.menu.has(plato)) throw new PlatoRepetidoException("Error: el plato no puede añadirse al menú porque ya se encuentra en él.");
        else throw new ChefNoEncontradoException("Error: el plato no puede añadirse al menú porque el chef a cargo de su preparación no se encuentra contratado en el restaurante.");
    }
}