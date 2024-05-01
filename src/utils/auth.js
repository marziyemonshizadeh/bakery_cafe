import { compare, hash } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";

const hashPassword = async (password) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

const generateAccessToken = (data) => {
  const token = sign({ ...data }, process.env.ACCESS_TOKEN_SECRET_KEY, {
    expiresIn: "60s",
  });
  return token;
};

const generateRefreshToken = (data) => {
  const token = sign({ ...data }, process.env.REFRESH_ACCESS_TOKEN_SECRET_KEY, {
    expiresIn: "15d",
  });
  return token;
};

const verifyPassword = async (password, hashedPassword) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};

const verifyAccessToken = (token) => {
  try {
    // Extraction payload
    const validationResult = verify(token, process.env.ACCESS_TOKEN_SECRET_KEY);
    return validationResult;
  } catch (err) {
    console.log("verify access token error =>", err);
    return false;
  }
};

export {
  generateAccessToken,
  generateRefreshToken,
  hashPassword,
  verifyAccessToken,
  verifyPassword,
};
