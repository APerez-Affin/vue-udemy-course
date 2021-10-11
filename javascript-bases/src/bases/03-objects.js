const object = {
  nombre: "Adrian",
  apellidos: "Perez",
  direccion: {
    ciudad: "Madrid",
    zip: "28022",
  },
};

// Asignacion de valores a un nuevo objeto
const object2 = { ...object };

object2.nombre = "Gary";

console.log(object);
console.log(object2);
