import { Chef } from "../Chef";
import { Plato } from "../Plato";

export class Restaurante {

    private _nombre: string;
    private _menu: Set<Plato>;
    private _chefs: Set<Chef>;

    constructor(nombre: string, menu: Set<Plato>, chefs: Set<Chef>) {
        this._nombre=nombre;
        this._menu=menu;
        this._chefs=chefs;
    }

    public get nombre(): string { return this._nombre; }
    public get menu(): Set<Plato> { return this._menu; }
    public get chefs(): Set<Chef> { return this._chefs; }

    public set nombre(nombre: string) { this._nombre=nombre; }
    public set menu(menu: Set<Plato>) { this._menu=menu; }
    public set chefs(chefs: Set<Chef>) { this._chefs=chefs; }

    public agregarChef(chef: Chef): void {
        if(chef.experienciaCulinaria && (new Date().getFullYear()-chef.fechaNacimiento.getFullYear()>18 || new Date().getMonth()>chef.fechaNacimiento.getMonth() || new Date().getDate()>=chef.fechaNacimiento.getDate())) {
            this._chefs.add(chef);
            // console.log("El chef "+chef.getNombre()+" "+chef.getApellido()+" se unió al equipo de "+this.nombre+".");
        } else if(!chef.experienciaCulinaria) throw new ChefSinExperienciaException("El chef no puede ser contratado porque no tiene experiencia culinaria previa.");
        else throw new ChefMenorDeEdadException("Error: el chef no puede ser contratado porque es menor de edad.");
    }

    public agregarPlato(plato: Plato) {
        if(!this._menu.has(plato) && this._chefs.has(plato.chef)) {
            this._menu.add(plato);
            // console.log("El plato "+plato.getNombre()+" se agregó al menú de "+this.nombre+".");
        } else if(this._menu.has(plato)) throw new PlatoRepetidoException("Error: el plato no puede añadirse al menú porque ya se encuentra en él.");
        else throw new ChefNoEncontradoException("Error: el plato no puede añadirse al menú porque el chef a cargo de su preparación no se encuentra contratado en el restaurante.");
    }
}