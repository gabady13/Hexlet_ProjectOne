#!/usr/bin/env node

import askName from '..';
import Welcome from '../Welcome';
import { random } from 'lodash/fp';

const readlineSync = require('readline-sync');

const roundCount = 3;
const roundCo = 0;

console.log(Welcome());
console.log('Answer "yes" if number even otherwise answer "no".');
const userName = askName();
console.log(`Hello, ${userName}!`);

const failAnsver = (ansver, LuserName) => {
  if (ansver === 'yes') {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${LuserName}!`);
  } else {
    console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${LuserName}!`);
  }
};

const askQuastion = () => {
  const rand = random(1, 100);
  console.log(`Question:${rand}`);
  const ansver = readlineSync.question('Your answer:');
  const obj = {};
  obj.numer = rand;
  obj.ansver = ansver;
  return obj;
};

const roundOfGames = (roundCou, countRounds, LuserName) => {
  if (roundCou === countRounds) {
    console.log(`Congratulations, ${LuserName}!`);
  } else {
    const Quastion = askQuastion();
    if ((Quastion.numer % 2 === 0 && Quastion.ansver === 'yes') || (Quastion.numer % 2 !== 0 && Quastion.ansver === 'no')) {
      console.log('Correct');
      roundOfGames(roundCou + 1, countRounds, LuserName);
    } else {
      failAnsver(Quastion.ansver, LuserName);
    }
  }
};

roundOfGames(roundCo, roundCount, userName);
