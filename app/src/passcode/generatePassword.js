import R from 'rambda';
// eslint-disable-next-line import/extensions
import generate from './generate.js';
// eslint-disable-next-line import/extensions
import save from './repository.js';

const generatePassword = R.pipe(generate, save('userId'));

export default generatePassword;
