const person = {
  name: "Adrian",
  age: "21",
  codeName: "Rubah",
};

const createPerson = ({ name, age, codeName }) => ({
  id: 1,
  name,
  age,
  codeName,
});

console.log(createPerson(person));
