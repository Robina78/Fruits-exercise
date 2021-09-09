import fruits from "./fruits";
import {choice, remove} from './helpers';

let fruit = choice(fruits);

console.log(`I'd like one ${fruit}`);
console.log(`Here you go ${fruit}`);
console.log('Delicious! My I have another?');

let remaining = remove(fruits, fruit);
console.log(`I'm sorry, we're all out. we have ${remaining.length} left.`)