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

app.get('/', (req, res) => {
    app.use(express.static(path.resolve(__dirname, 'frontend', 'build')));
    res.sendFile(path.resolve(__dirname, "frontend", "build", 'index.html'));
})

app.listen(3001, () => {
    console.log("Server Started");
});
 