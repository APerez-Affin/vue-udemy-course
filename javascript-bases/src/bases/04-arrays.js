const array = [1, 2, 3];

// Asignar valor a un array
array.push(4);

// Asignacion de valores a un nuevo array
const array2 = [...array];
array2.push(5);

// Recorrer un array
const array3 = array2.map((item) => item + 1);

console.log(array);
console.log(array2);
console.log(array3);
