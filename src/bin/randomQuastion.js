import { random } from 'lodash/fp';

const readlineSync = require('readline-sync');

export default (trans, num, numAnsver) => {
  const rand = random(1, num);
  console.log(`${trans}:${rand}`);
  const ansver = readlineSync.question('Your answer:');
  const obj = {};
  obj.numer = numAnsver(rand);
  obj.ansver = ansver;
  return obj;
};
