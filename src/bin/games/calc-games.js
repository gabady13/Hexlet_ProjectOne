import { random } from 'lodash/fp';
import startGames from '../../startGames';


const readlineSync = require('readline-sync');

const nameTask = 'What is the result of the expression?';
const ansverQuastion = () => {
  const one = random(1, 100);
  const two = random(1, 100);
  const znak = random(0, 2);
  const arr = ['+', '-', '*'];
  const rand = (`${one}${arr[znak]}${two}`);
  console.log(`Question:${rand}`);
  const ansver = readlineSync.question('Your answer:');
  const obj = {};
  // eslint-disable-next-line no-eval
  obj.numer = eval(rand);
  obj.ansver = Number(ansver);
  return obj;
};

export default () => startGames(nameTask, ansverQuastion);
