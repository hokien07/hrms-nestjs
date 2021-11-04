import * as bcrypt from 'bcrypt';

const hash = async (planText) => {
  const saltOrRounds = 10;
  const hash = await bcrypt.hash(planText, saltOrRounds);
  return hash;
};

const compare = async (planText, hash) => {
  const isMatch = await bcrypt.compare(planText, hash);
  return isMatch;
};

export = { hash, compare };
