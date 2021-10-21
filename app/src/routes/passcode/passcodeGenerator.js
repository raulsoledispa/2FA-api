import speakeasy from 'speakeasy';

async function getSecret() {
  return speakeasy.generateSecret({ length: 20 });
}

async function generate() {
  const secret = await getSecret();
  return speakeasy.totp({
    secret: secret.base32,
    encoding: 'base32',
  });
}

function verify(code) {
  console.log(code);
  return true;
}

export { generate, verify };
