import {userRepository} from '../repository/userRepository.js'
import bcrypt from 'bcrypt';

export class userService{
    constructor(){
        this.userRepository=new userRepository();
    }

    encryptPassword(user){
      const plainPassword=user.password;
      const saltRounds=10;
      const hash = bcrypt.hashSync(plainPassword, saltRounds);
      user.password=hash;
    }

    async create(user){
      this.encryptPassword(user);
      let createUser=  await this.userRepository.create(user);
      return createUser;
    }

}

