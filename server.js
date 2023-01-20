const express = require('express');

const app = express();

const port = 3000;

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("We go gym?");
});

app.post('/login', (req, res) => {
    const loginUser = req.body.userName;
    const loginPassword = req.body.password;
    console.log('Login Username: ' + loginUser);
    if (loginUser == "googlemail123@gmail.com" && loginPassword == "Taco1!"){
        res.send("Corn-Fed Yetis")
    } 
    else {
        res.status(401);
        res.send("Go away, or I will taunt you a second time.");
    }
    
    res.send("Light WEIGHT BABY!!!");
});

app.listen(port, () => {
    console.log("Listening");
});



