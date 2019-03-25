#!/usr/bin/env node

import { random } from 'lodash/fp';
import askName from '../..';
import Welcome from '../../Welcome';

const readlineSync = require('readline-sync');

const roundCount = 3;
const roundCo = 0;

console.log(Welcome());
console.log('What is the result of the expression?');
const userName = askName();
console.log(`Hello, ${userName}!`);

const failAnsver = (ansver, numer, LuserName) => {
  console.log(`${ansver} is wrong answer ;(. Correct answer was ${numer}.\nLet's try again, ${LuserName}!`);
};

const askQuastion = () => {
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
