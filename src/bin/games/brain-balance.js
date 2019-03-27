#!/usr/bin/env node

import { repeat, random } from 'lodash/fp';
import askName from '../..';
import Welcome from '../../Welcome';

const readlineSync = require('readline-sync');

const roundCount = 3;
const roundCo = 0;

console.log(Welcome());
console.log('Balance the given number.');
const userName = askName();
console.log(`Hello, ${userName}!`);

const failAnsver = (ansver, numer, LuserName) => {
  console.log(`${ansver} is wrong answer ;(. Correct answer was ${numer}.\nLet's try again, ${LuserName}!`);
};

function balance(num) {
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
}

const askQuastion = () => {
  const a = random(100, 10000);
  console.log(`Question:${a}`);
  const ansver = readlineSync.question('Your answer:');
  const obj = {};
  obj.numer = balance(a);
  obj.ansver = Number(ansver);
  return obj;
};

const roundOfGames = (roundCou, countRounds, LuserName) => {
  if (roundCou === countRounds) {
    console.log(`Congratulations, ${LuserName}!`);
  } else {
    const Quastion = askQuastion();
    if (Quastion.numer === Quastion.ansver) {
      console.log('Correct');
      roundOfGames(roundCou + 1, countRounds, LuserName);
    } else {
      failAnsver(Quastion.ansver, Quastion.numer, LuserName);
    }
  }
};

roundOfGames(roundCo, roundCount, userName);
