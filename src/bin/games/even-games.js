import startGames from '../../startGames';
import ranQuastion from '../randomQuastion';

const nameTask = 'Answer "yes" if number even otherwise answer "no"';
const tryAnsver = (num) => {
  let otvet = 'no';
  if (num % 2 === 0) {
    otvet = 'yes';
  }
  return otvet;
};

const ansverQuastion = () => {
  const rand = ranQuastion('Question', 1000, tryAnsver);
  return rand;
};

export default () => startGames(nameTask, ansverQuastion);
