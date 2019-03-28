import startGames from '../../startGames';
import ranQuastion from '../randomQuastion';

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
  const rand = ranQuastion('Question', 1000);
  const ansver = readlineSync.question('Your answer:');
  const obj = {};
  obj.numer = tryAnsver(rand);
  obj.ansver = ansver;
  return obj;
};

export default () => startGames(nameTask, ansverQuastion);
