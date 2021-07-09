const express = require('express');
const Authorization = require('./controllers/authorization');
const ListPokemons = require('./controllers/listPokemons');
require('dotenv').config();

const routes = express.Router();

routes.post("/login", Authorization.login);
routes.post("/register", Authorization.register);
routes.get("/listUsers", Authorization.list);

routes.get("/list", ListPokemons.list);
routes.get("/search", ListPokemons.search);
routes.get("/details", ListPokemons.details);

routes.get("/teste", Authorization.verify, (req, res) => {
    res.json({ msg: "Deu bom" })
});

module.exports = routes;