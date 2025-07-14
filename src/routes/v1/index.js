import express from 'express';
import {create} from '../../controllers/userController.js';
const router=express.Router();

router.post('/signup',create);


export {router as v1routes}