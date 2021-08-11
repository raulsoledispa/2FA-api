const passwords = [];

const save = (userId) => (token) => {
  const data = { userId, token };
  passwords.push(data);
  return data;
};

export default save;
