require('dotenv').config();

const express = require('express');

const app = express();

const usersRouter = require("./api/users/router");

app.use(express.json());
app.use('/api/user', usersRouter);

const port = 3000;

app.listen(port , () => {
    console.log("Server running on port: ", port);
});