import { userRepository } from "../repository/userRepository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { serverConfig } from "../config/serverConfig.js";
export class userService {
  constructor() {
    this.userRepository = new userRepository();
  }

  encryptPassword(user) {
    const plainPassword = user.password;
    const saltRounds = 10;
    const hash = bcrypt.hashSync(plainPassword, saltRounds);
    user.password = hash;
  }
  async decryptPassword(user) {
    const plainPassword = user.password;
    let createUser = await this.userRepository.getUserByEmail(user);
    let result = await bcrypt.compare(plainPassword, createUser[0].password);
    return result;
  }

  async create(user) {
    this.encryptPassword(user);
    let createUser = await this.userRepository.create(user);
    return createUser;
  }

  async signIn(user) {
    try {
      let passwordVerification = await this.decryptPassword(user);
      if (passwordVerification) {
        return this.createToken(user);
      } else {
        throw new Error("Email or Password is incorrect!");
      }
    } catch (error) {
      throw error;
    }
  }

  async createToken(user) {
    let userDetail = await this.userRepository.getUserByEmail(user);
    console.log(serverConfig.jwtSecret);
    var token = jwt.sign(userDetail[0], serverConfig.jwtSecret, {
      expiresIn: "1h",
    });
    return token;
  }

  async verifyToken(token) {

    let decoded = jwt.verify(token,serverConfig.jwtSecret);
     if(!decoded){
      throw new Error("Access token is missing!");
    }
     return {user_id:decoded.id};

    
  }
}
