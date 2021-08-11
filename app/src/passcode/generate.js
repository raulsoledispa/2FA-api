import speakeasy from 'speakeasy';

function generate() {
  const secret = speakeasy.generateSecret({ length: 20 });
  return speakeasy.totp({
    secret: secret.base32,
    encoding: 'base32',
  });
}

export default generate;
