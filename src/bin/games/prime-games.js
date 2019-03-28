import { random } from 'lodash/fp';
import startGames from '../../startGames';


const readlineSync = require('readline-sync');

const nameTask = 'Answer "yes" if number prime otherwise answer "no"';
function isPrime(num) {
  if (num < 2) return 'no';
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
}

const ansverQuastion = () => {
  const num = random(1, 1000);
  console.log(`Is this number prime:${num}`);
  const ansver = readlineSync.question('Your answer:');
  const obj = {};
  obj.numer = isPrime(num);
  obj.ansver = ansver;
  return obj;
};

export default () => startGames(nameTask, ansverQuastion);
