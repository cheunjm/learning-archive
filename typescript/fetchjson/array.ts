const carMakers = ['ford', 'toyota', ' chevy'];
const dates = [new Date(), new Date()];

const carByMake = [['f150'], ['corolloa'], ['camaro']];

// Help with inference when extracitng  values
const car = carMakers[0];
const myCar = carMakers.pop();

carMakers.push(100);

carMakers.map((car: string) => {
  return car.toUpperCase();
});

// Flexible types
const importantDates = [new Date(), '2030-10-10'];
