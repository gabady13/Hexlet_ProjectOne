
import askName from './askName';
import Welcome from './Welcome';

const failAnsver = (ansver, numer, userName) => {
  console.log(`${ansver} is wrong answer ;(. Correct answer was ${numer}.\nLet's try again, ${userName}!`);
};

const roundOfGames = (ansverQuastion, Count, countRounds, userName) => {
  if (Count === countRounds) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    const Quastion = ansverQuastion();
    if (Quastion.numer === Quastion.ansver) {
      console.log('Correct');
      roundOfGames(ansverQuastion, Count, countRounds + 1, userName);
    } else {
      failAnsver(Quastion.ansver, Quastion.numer, userName);
    }
  }
};

const startGames = (nameTask, ansverQuastion) => {
  const roundCount = 3;
  const countRounds = 0;

  console.log(Welcome());
  console.log(nameTask);
  const userName = askName();
  console.log(`Hello, ${userName}!`);

  roundOfGames(ansverQuastion, roundCount, countRounds, userName);
};

export default startGames;
