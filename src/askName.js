
const readlineSync = require('readline-sync');

export default () => {
  const userName = readlineSync.question('May I have your name? ');
  const str = `Hello, ${userName}!`;
  return str;
};
