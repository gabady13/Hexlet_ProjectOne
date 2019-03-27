import { random } from 'lodash/fp';
import startGames from '../../startGames';


const readlineSync = require('readline-sync');

const nameTask = 'Find the greatest common divisor of given numbers.';
function gcd(a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
}

const ansverQuastion = () => {
  const a = random(1, 100);
  const b = random(1, 100);
  console.log(`Question:${a} ${b}`);
  const ansver = readlineSync.question('Your answer:');
  const obj = {};
  obj.numer = gcd(a, b);
  obj.ansver = Number(ansver);
  return obj;
};

export default () => startGames(nameTask, ansverQuastion);
