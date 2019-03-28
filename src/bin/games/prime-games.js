import startGames from '../../startGames';
import ranQuastion from '../randomQuastion';

const nameTask = 'Answer "yes" if number prime otherwise answer "no"';
function isPrime(num) {
  if (num < 2) return 'no';
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
}

const ansverQuastion = () => {
  const num = ranQuastion('Is this number prime', 1000, isPrime);
  return num;
};

export default () => startGames(nameTask, ansverQuastion);
