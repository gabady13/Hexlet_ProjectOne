import askName from '../..';
import Welcome from '../../Welcome';

console.log(Welcome());
const userName = askName();

export default () => console.log(`Hello, ${userName}!`);
