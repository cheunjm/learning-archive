import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

// const numbersCollection = new NumbersCollection([10, 3, -3, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const charCollections = new CharactersCollection('fdasb');
const sorter = new Sorter(charCollections);
sorter.sort();
console.log(charCollections.data);
