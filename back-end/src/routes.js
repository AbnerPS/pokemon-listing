const express = require('express');
require('dotenv').config();
const Authorization = require('./controllers/authorization');

const routes = express.Router();

routes.get("/", (req, res) => {
    res.send(process.env.SECRET)
});

routes.post("/login", Authorization.login);

routes.get("/teste", Authorization.verify, (req, res) => {
    res.json({ msg: "Deu bom" })
});

module.exports = routes;