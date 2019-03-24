export const people = [
  {
    id: "1",
    name: "Nicolas",
    age: 18,
    gender: "female"
  },
  {
    id: "2",
    name: "Nico",
    age: 11,
    gender: "female"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => String(id) === person.id);
  return filteredPeople[0];
};
