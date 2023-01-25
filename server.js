const express = require('express');

const app = express();

const port = 3000;

const bodyParser = require('body-parser');

const Redis = require('redis');

const redisClient = Redis.createClient();

const {v4: uuidv4} = require ('uuid');

app.use(bodyParser.json());

app.get("/", (req, res) => {
    
    res.send("We go gym?");
});

app.post('/login', (req, res) => {
    
    const loginUser = req.body.userName;
    
    const loginPassword = req.body.password;
    
    console.log('Login Username: ' + loginUser);
    
    if (loginUser == "googlemail123@gmail.com" && loginPassword == "Taco1!"){
        
        const loginToken = uuidv4();
        
        res.send(loginToken);
    } 
    else {
        
        res.status(401);
        
        res.send("Go away, or I will taunt you a second time.");
    }
    
});

app.listen(port, () => {
    
    redisClient.connect();

    console.log("Listening");
});



