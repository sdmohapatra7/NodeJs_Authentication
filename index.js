const express = require('express');
const port = 700;
const app = express();
const URL = require('./config/mongoose');
const router = require('./routes/index');

//middleware
app.use(express.urlencoded());
app.use('/',router);

app.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('server is up and running on port',port);
});