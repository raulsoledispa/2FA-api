import R from 'rambda';
// eslint-disable-next-line import/extensions
import { generate, verify } from './passcodeGenerator.js';
// eslint-disable-next-line import/extensions
import { save, search } from './repository.js';

const compose2 =
  (f, g) =>
  (...args) =>
    f(g(...args));

const compose = (...fns) => fns.reduce(compose2);

const PasswordService = (userId) => ({
  generate() {
    return compose(save(userId).bind(this), generate.bind(this))(this);
  },
  async verify(code) {
    return compose(
      verify.bind(this),
      search
        .call(this)
        .then()
        .catch((err) => console.log(err))
    );
  },
});

export default PasswordService;
