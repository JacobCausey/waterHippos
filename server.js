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
    console.log('Login Username: ' + loginUser);
    res.send("Light WEIGHT BABY!!!");
});

app.listen(port, () => {
    console.log("Listening");
});



