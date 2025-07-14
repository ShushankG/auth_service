import express from 'express';
import bodyParser from 'body-parser';
import {serverConfig} from './config/serverConfig.js';
import {apiRoutes} from './routes/index.js';
const app= express();
const router=express.Router();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use('/api',apiRoutes);

function createServer(){
    console.log(serverConfig.port);
    app.listen(serverConfig.port,()=>{console.log('server started on port '+ serverConfig.port)});
}

createServer();