const express = require('express');
const MonogClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
        
const app = express();

const port = 80;
app.listen(port, () =>{
    console.log("we are live on " + port)
});
