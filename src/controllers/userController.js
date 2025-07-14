import { response } from "express";
import { userService } from "../services/userService.js";

    const Service = new userService();
  

  async function create(req, res) {
    try {
      let user = { 
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
      };
  let    response = await Service.create(user);

      return res.status(201).json({
        success: true,
        message: "Succefully created new user !",
        data: response,
        err: {},
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Something went wrong !",
        data: {},
        err: error.message,
      });
    }
  }

export {create}