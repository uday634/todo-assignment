const express = require('express');
const path = require('path')
const app = express();
const cors = require('cors')
const auth = require('./routes/auth');
const list = require('./routes/list')
require("./util/connection");


app.use(express.json());
app.use(cors())

// app.use('/user', auth);
app.use('/user', auth);
app.use('/list',list);


app.listen(3001, () => { 
    console.log("Server Started");
});
 