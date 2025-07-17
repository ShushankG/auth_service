import dotenv from "dotenv";
dotenv.config();

export const serverConfig = {
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
};
