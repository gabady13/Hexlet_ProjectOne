import readlineSync from 'readline-sync';

export default () => {     
var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');
return 'Hello ' + userName + '!';
};