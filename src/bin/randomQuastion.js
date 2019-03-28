import { random } from 'lodash/fp';

export default (trans, num) => {
  const rand = random(1, num);
  console.log(`${trans}:${rand}`);
  return rand;
};
