import { Chef } from "./Chef";
import { Plato } from "./Plato";
import { Restaurante } from "./Restaurante";
import { Tipo } from "./Tipo";
import { ChefMenorDeEdadException } from "./ChefMenorDeEdadException";
import { ChefNoEncontradoException } from "./ChefNoEncontradoException";
import { ChefSinExperienciaException } from "./ChefSinExperienciaException";
import { PlatoRepetidoException } from "./PlatoRepetidoException";

function main(): void {

    let fechaNacimiento1: Date = new Date("2003-4-7");
    let fechaNacimiento2: Date = new Date("1997-9-13");
    let fechaNacimiento3: Date = new Date("2008-12-27");
    let fechaNacimiento4: Date = new Date("1985-2-19");
    let fechaNacimiento5: Date = new Date("2000-10-31");

    let chef1: Chef = new Chef("Calvo", "Daniel", fechaNacimiento1, true);
    let chef2: Chef = new Chef("Lobo", "Daniel", fechaNacimiento2, true);
    let chef3: Chef = new Chef("Arquitectura", "Sapo", fechaNacimiento3, true);
    let chef4: Chef = new Chef("Peluquería", "Sapo", fechaNacimiento4, true);
    let chef5: Chef = new Chef("Traumas", "Daniel", fechaNacimiento5, false);

    let plato1: Plato = new Plato("Pizza", "Pan redondo con queso", 2500, Tipo.PLATOPRINCIPAL, chef1);
    let plato2: Plato = new Plato("Milanesa", "Pollo empanado", 1650, Tipo.PLATOPRINCIPAL, chef2);
    let plato3: Plato = new Plato("Picada de fiambres", "Diversos fiambres", 4500, Tipo.ENTRADA, chef3);
    let plato4: Plato = new Plato("Bocha de helado", "Postre frío a base de crema o agua", 950, Tipo.POSTRE, chef4);
    let plato5: Plato = new Plato("Flan", "A base de huevo y acaramelado", 1200, Tipo.POSTRE, chef5);

    let restaurante: Restaurante = new Restaurante("Lo del Paja", new Set<Plato>(), new Set<Chef>());

    try {
        restaurante.agregarChef(chef1);
        console.log("El chef "+chef1.nombre+" "+chef1.apellido+" se unió al equipo de "+restaurante.nombre+".");
    } catch(error) { console.error((error as ChefMenorDeEdadException | ChefSinExperienciaException).message); }

    try {
        restaurante.agregarChef(chef2);
        console.log("El chef "+chef2.nombre+" "+chef2.apellido+" se unió al equipo de "+restaurante.nombre+".");
    } catch(error) { console.error((error as ChefMenorDeEdadException | ChefSinExperienciaException).message); }

    try { // Devuelve error de chef menor de edad
        restaurante.agregarChef(chef3);
        console.log("El chef "+chef3.nombre+" "+chef3.apellido+" se unió al equipo de "+restaurante.nombre+".");
    } catch(error) { console.error((error as ChefMenorDeEdadException | ChefSinExperienciaException).message); }

    try {
        restaurante.agregarChef(chef4);
        console.log("El chef "+chef4.nombre+" "+chef4.apellido+" se unió al equipo de "+restaurante.nombre+".");
    } catch(error) { console.error((error as ChefMenorDeEdadException | ChefSinExperienciaException).message); }

    try { // Devuelve error de chef sin experiencia
        restaurante.agregarChef(chef5);
        console.log("El chef "+chef5.nombre+" "+chef5.apellido+" se unió al equipo de "+restaurante.nombre+".");
    } catch(error) { console.error((error as ChefMenorDeEdadException | ChefSinExperienciaException).message); }

    try {
        restaurante.agregarPlato(plato1);
        console.log("El plato "+plato1.nombre+" se agregó al menú de "+restaurante.nombre+".");
    } catch(error) { console.error((error as ChefNoEncontradoException | PlatoRepetidoException).message); }

    try {
        restaurante.agregarPlato(plato2);
        console.log("El plato "+plato2.nombre+" se agregó al menú de "+restaurante.nombre+".");
    } catch(error) { console.error((error as ChefNoEncontradoException | PlatoRepetidoException).message); }
    
    try {
        restaurante.agregarPlato(plato3);
        console.log("El plato "+plato3.nombre+" se agregó al menú de "+restaurante.nombre+".");
    } catch(error) { console.error((error as ChefNoEncontradoException | PlatoRepetidoException).message); }
    
    try {
        restaurante.agregarPlato(plato4);
        console.log("El plato "+plato4.nombre+" se agregó al menú de "+restaurante.nombre+".");
    } catch(error) { console.error((error as ChefNoEncontradoException | PlatoRepetidoException).message); }
    
    try {
        restaurante.agregarPlato(plato5);
        console.log("El plato "+plato5.nombre+" se agregó al menú de "+restaurante.nombre+".");
    } catch(error) { console.error((error as ChefNoEncontradoException | PlatoRepetidoException).message); }

    try { // Devuelve error de plato repetido
        restaurante.agregarPlato(plato1);
        console.log("El plato "+plato1.nombre+" se agregó al menú de "+restaurante.nombre+".");
    } catch(error) { console.error((error as ChefNoEncontradoException | PlatoRepetidoException).message); }
    
}

main();