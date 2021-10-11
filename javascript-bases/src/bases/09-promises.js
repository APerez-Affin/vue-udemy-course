import { getHeroById } from "./08-find-filter";

//* Promesa sin parametros */
const promise = new Promise((resolve, reject) => {
  // Ok
  resolve("Promise done");

  // Error - Si existe resolve no se ejecuta
  // reject("Error");
});

promise.then(console.log).catch(console.log);

//* Promesa con parametros */
const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);
      hero ? resolve(hero) : reject("Hero not found");
    }, 1000);
  });
};

getHeroByIdAsync(1)
  .then((h) => console.log(h))
  .catch(console.log);
