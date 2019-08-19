const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieparser = require('cookie-parser');
const bodyParser = require('body-parser')
const mongoose = require('./db')
const passport = require('./src/passport/index');
const {userController} = require('./src/controller/userController');
const {foodController} = require('./src/controller/foodController')
const cors = require('cors')
const app = express()
const port =  process.env.port || 4000;
const {log:print} = console



class Server{
    constructor(){
        this.bodyParser()
        this.urlEncoded()
        this.corsConfig()
        this.logger()
        this.serverRoutes();
    
    }
    logger(){
        return app.use(logger('dev'))
    }
    bodyParser(){
     return   app.use(bodyParser.json())
    }
    urlEncoded(){
     return   app.use(express.urlencoded({extended:false}))
    }
    cookiParser(){
        return app.use(cookieparser())
    }
    passportInit(){
        return app.use(passport.initialize())
    }
    serverRoutes(){
     app.get('/',(req,res)=>res.json('hello restaurent'))
     app.use('/user',userController);
     app.use('/food',foodController);
        
    }
    corsConfig(){
        app.use(cors())
    }
    listen(){
        return app.listen(port,()=>print(`server is running on ${port}`))
    }
}
const server = new Server()
server.bodyParser();
server.urlEncoded();
server.logger();
server.cookiParser();
server.passportInit();
server.corsConfig()
server.serverRoutes();

server.listen();
