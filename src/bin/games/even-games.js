import { random } from 'lodash/fp';
import startGames from '../../startGames';

const readlineSync = require('readline-sync');

const nameTask = 'Answer "yes" if number even otherwise answer "no"';
const tryAnsver = (num) => {
  let otvet = 'no';
  if (num % 2 === 0) {
    otvet = 'yes';
  }
  return otvet;
};

const ansverQuastion = () => {
  const rand = random(1, 100);
  console.log(`Question:${rand}`);
  const ansver = readlineSync.question('Your answer:');
  const obj = {};
  obj.numer = tryAnsver(rand);
  obj.ansver = ansver;
  return obj;
};

export default () => startGames(nameTask, ansverQuastion);
