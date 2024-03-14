import { Chef } from "./Chef";
import { Plato } from "./Plato";
import { Restaurante } from "./Restaurante";
import { Tipo } from "./Tipo";

function main(): void {

    let fechaNacimiento1: Date = new Date(2003-4-7);
    let fechaNacimiento2: Date = new Date(1997-9-13);
    let fechaNacimiento3: Date = new Date(2008-12-27);
    let fechaNacimiento4: Date = new Date(1985-2-19);
    let fechaNacimiento5: Date = new Date(2000-10-31);

    let chef1: Chef = new Chef("Calvo", "Daniel", fechaNacimiento1, true);
    let chef2: Chef = new Chef("Lobo", "Daniel", fechaNacimiento2, true);
    let chef3: Chef = new Chef("Arquitectura", "Sapo", fechaNacimiento3, true);
    let chef4: Chef = new Chef("Peluquería", "Sapo", fechaNacimiento4, true);
    let chef5: Chef = new Chef("Traumas", "Daniel", fechaNacimiento5, false);

    let chefs: Set<Chef> = new Set<Chef>();

    let plato1: Plato = new Plato("Pizza", "Pan redondo con queso", 2500, Tipo.PLATOPRINCIPAL, chef1);
    let plato2: Plato = new Plato("Milanesa", "Pollo empanado", 1650, Tipo.PLATOPRINCIPAL, chef2);
    let plato3: Plato = new Plato("Picada de fiambres", "Diversos fiambres", 4500, Tipo.ENTRADA, chef3);
    let plato4: Plato = new Plato("Bocha de helado", "Postre frío a base de crema o agua", 950, Tipo.POSTRE, chef4);
    let plato5: Plato = new Plato("Flan", "A base de huevo y acaramelado", 1200, Tipo.POSTRE, chef5);

    let menu: Set<Plato> = new Set<Plato>();
    menu.add(plato1);
    menu.add(plato2);
    // menu.add(plato3);
    menu.add(plato4);
    // menu.add(plato5);

    let restaurante: Restaurante = new Restaurante("Lo del Paja", menu, chefs);

    try {
        
        chefs.add(chef1);
        chefs.add(chef2);
        // chefs.add(chef3);
        chefs.add(chef4);
        // chefs.add(chef5);

    } catch(error) { console.error((error as ChefMenorDeEdadException | ChefSinExperienciaException).message); }
    restaurante.agregarChef(chef1);

}

main();