const saludar = (n) => `Hola ${n}`;
console.log(saludar("Adrian"));

const getUser = () => ({ uuid: "1", user: "Adrian" });
console.log(getUser());

import { heroes } from "./data/heroes";

// Ejercicio
//** Verifica si algun dato tiene la id enviada dentro del array especificado */
const exist = (array, id ) => array.some(elem => elem.id === id);
console.log(exist(heroes, 5));
console.log(heroes);