import speakeasy from 'speakeasy';

function generate() {
  const secret = speakeasy.generateSecret({ length: 20 });
  this.log.info('Token generated');
  return speakeasy.totp({
    secret: secret.base32,
    encoding: 'base32',
  });
}

function verify(code) {
  return true;
}

export { generate, verify };
