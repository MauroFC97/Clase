import bcryp from "bcrypt";

export const encryptPassword = async (password) => {
  const salt = await bcryp.genSalt(10);
  return await bcryp.hash(password, salt);
};

export const comparePassword = async (password, receivedPassword) => {
  return await bcryp.compare(password, receivedPassword);
};
