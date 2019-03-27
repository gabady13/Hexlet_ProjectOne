import { repeat, random } from 'lodash/fp';
import startGames from '../../startGames';

const readlineSync = require('readline-sync');

const nameTask = 'Balance the given number.';

const balance = (num) => {
  const str = String(num);
  const { length } = str;
  const sum = str.split('').reduce((acc, element) => acc + Number(element), 0);

  const firstNum = Math.floor(sum / length);
  const firstLength = length - (sum % length);
  const secondNum = firstNum + 1;
  const secondLength = length - firstLength;

  const firstStr = repeat(String(firstNum), firstLength);
  const secondStr = repeat(String(secondNum), secondLength);
  return Number(`${firstStr}${secondStr}`);
};

const ansverQuastion = () => {
  const a = random(100, 10000);
  console.log(`Question:${a}`);
  const ansver = readlineSync.question('Your answer:');
  const obj = {};
  obj.numer = balance(a);
  obj.ansver = Number(ansver);
  return obj;
};

export default () => startGames(nameTask, ansverQuastion);
