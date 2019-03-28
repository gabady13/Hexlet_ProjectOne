import { random } from 'lodash/fp';
import startGames from '../../startGames';

const readlineSync = require('readline-sync');

const nameTask = 'Specify the missing number';

const ansverQuastion = () => {
  const count = random(10, 15);
  let startNumer = random(1, 100);
  const iterator = random(1, 100);
  const nunerUn = random(2, 14);
  let numer;
  let i = 1;
  let str = '';

  while (i <= count) {
    if (nunerUn === i) {
      str = `${str} ..`;
      numer = startNumer;
    } else {
      str = `${str} ${startNumer}`;
    }
    startNumer += iterator;
    i += 1;
  }

  console.log(`What number is missing in this progression?:${str}`);
  const ansver = readlineSync.question('Your answer:');
  const obj = {};
  obj.numer = numer;
  obj.ansver = Number(ansver);
  return obj;
};

export default () => startGames(nameTask, ansverQuastion);
