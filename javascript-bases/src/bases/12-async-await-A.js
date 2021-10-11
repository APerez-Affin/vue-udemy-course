const myPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Dato de la promesa");
    }, 1000);
  });

const myPromise2Async = async () => {
  try {
    console.log("Inicio");
    console.log(await myPromise());
    console.log("Fin");

    return 'Fin del promise2'
  } catch (error) {
    throw "Cacth en promise2";
  }
};

myPromise2Async()
  .then((value) => console.log(value))
  .catch(console.log);
