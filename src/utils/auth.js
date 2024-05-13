"use server";
import UserModel from "@/models/user";
import { compare, hash } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import connectToDB from "./db";

const hashPassword = async (password) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

const generateAccessToken = (data) => {
  const token = sign({ ...data }, process.env.ACCESS_TOKEN_SECRET_KEY, {
    // expiresIn: "60s",
    expiresIn: "7d",
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

// validation data with regex
const validateUserName = (userName) => {
  const pattern = /^[a-z0-9_-]{3,15}$/g;
  return pattern.test(userName);
};
const validateEmail = (email) => {
  const pattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g;
  return pattern.test(email);
};
const validatePhone = (phone) => {
  const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;
  return pattern.test(phone);
};
const validatePassword = (password) => {
  const pattern =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g;
  return pattern.test(password);
};

const authUser = async () => {
  connectToDB();
  const token = cookies().get("token");
  console.log("token ===", token);
  let user = null;
  // const auth = useContext(AuthContext);

  if (token) {
    const tokenPayload = verifyAccessToken(token.value);
    console.log("tokenPayload=", tokenPayload);
    if (tokenPayload) {
      // auth?.setUser({
      //   email: tokenPayload.email,
      // });
      user = await UserModel.findOne({ email: tokenPayload.email });
    }
  }

  return user;
};

export {
  authUser,
  generateAccessToken,
  generateRefreshToken,
  hashPassword,
  validateEmail,
  validatePassword,
  validatePhone,
  validateUserName,
  verifyAccessToken,
  verifyPassword,
};
