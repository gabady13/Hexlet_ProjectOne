#!/usr/bin/env node

import { random } from 'lodash/fp';
import askName from '../..';
import Welcome from '../../Welcome';

const readlineSync = require('readline-sync');

const roundCount = 3;
const roundCo = 0;

console.log(Welcome());
console.log('Find the greatest common divisor of given numbers.');
const userName = askName();
console.log(`Hello, ${userName}!`);

const failAnsver = (ansver, numer, LuserName) => {
  console.log(`${ansver} is wrong answer ;(. Correct answer was ${numer}.\nLet's try again, ${LuserName}!`);
};

function gcd(a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
}

const askQuastion = () => {
  const a = random(1, 100);
  const b = random(1, 100);
  console.log(`Question:${a} ${b}`);
  const ansver = readlineSync.question('Your answer:');
  const obj = {};
  obj.numer = gcd(a, b);
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
