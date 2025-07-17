import { userService } from "../services/userService.js";

const Service = new userService();

async function create(req, res) {
  try {
    let user = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    };
    let response = await Service.create(user);

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

async function signIn(req, res) {
  try {
    let user = {
      email: req.body.email,
      password: req.body.password,
    };

    let response = await Service.signIn(user);
    return res.status(201).json({
      success: true,
      message: "Logged in successfully !",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong !",
      data: {},
      err: error.message,
    });
  }
}

function isAuthenticated(req,res){
 try{
  const authHeader =req.headers.authorization;
  const token =authHeader && authHeader.split(' ')[1];
  let response =Service.verifyToken(token);
  return res.status(200).json({
    success:true,
    message:"User is authenticated !",
    data: response,
    error: {}
  });


 }catch(error){
  return res.status(500).json({
    success:true,
    message:"Something went wrong !",
    data: {},
    error: error.message
  });
 }

}

export { create, signIn, isAuthenticated };