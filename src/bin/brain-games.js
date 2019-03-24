#!/usr/bin/env node

import askName from '..';
import Welcome from './Welcome';

console.log(Welcome());
const userName = askName();
console.log(`Hello, ${userName}!`);
