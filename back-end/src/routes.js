const express = require('express');
require('dotenv').config();
const Authorization = require('./controllers/authorization');
const ListPokemons = require('./controllers/listPokemons');

const routes = express.Router();

routes.post("/login", Authorization.login);
routes.post("/register", Authorization.register);

routes.get("/list", ListPokemons.list);
routes.get("/search", ListPokemons.search);
routes.get("/details", ListPokemons.details);

routes.get("/teste", Authorization.verify, (req, res) => {
    res.json({ msg: "Deu bom" })
});

module.exports = routes;