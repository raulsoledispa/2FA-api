import R from 'rambda';
// eslint-disable-next-line import/extensions
import generate from './generate.js';
// eslint-disable-next-line import/extensions
import save from './repository.js';

const compose2 =
  (f, g) =>
  (...args) =>
    f(g(...args));

const compose = (...fns) => fns.reduce(compose2);

const generatePassword = (userID) => compose(save(userID), generate)();

export default generatePassword;
