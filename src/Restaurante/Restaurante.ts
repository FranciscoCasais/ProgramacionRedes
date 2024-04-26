import { Chef } from "./Chef";
import { Plato } from "./Plato";
import { ChefMenorDeEdadException } from "./ChefMenorDeEdadException";
import { ChefNoEncontradoException } from "./ChefNoEncontradoException";
import { ChefSinExperienciaException } from "./ChefSinExperienciaException";
import { PlatoRepetidoException } from "./PlatoRepetidoException";

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
        if(chef.experienciaCulinaria && (new Date().getFullYear()-chef.fechaNacimiento.getFullYear()>18 || new Date().getMonth()+1>chef.fechaNacimiento.getMonth()+1 || new Date().getDate()>=chef.fechaNacimiento.getDate())) {
            this._chefs.add(chef);
        } else if(!chef.experienciaCulinaria) throw new ChefSinExperienciaException("Error: El chef no puede ser contratado porque no tiene experiencia culinaria previa.");
        else throw new ChefMenorDeEdadException("Error: el chef no puede ser contratado porque es menor de edad.");
    }

    public agregarPlato(plato: Plato) {
        if(!this._menu.has(plato) && this._chefs.has(plato.chef)) {
            this._menu.add(plato);
        } else if(this._menu.has(plato)) throw new PlatoRepetidoException("Error: el plato no puede añadirse al menú porque ya se encuentra en él.");
        else throw new ChefNoEncontradoException("Error: el plato no puede añadirse al menú porque el chef a cargo de su preparación no se encuentra contratado en el restaurante.");
    }
}