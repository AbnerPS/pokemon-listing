const express = require('express');
const Authorization = require('./controllers/authorization');
const ListPokemons = require('./controllers/listPokemons');
require('dotenv').config();

const routes = express.Router();

routes.post("/login", Authorization.login);
routes.post("/register", Authorization.register);
routes.get("/listUsers", Authorization.list);

routes.get("/list", Authorization.verify, ListPokemons.list);
routes.get("/search", Authorization.verify, ListPokemons.search);
routes.get("/details", Authorization.verify, ListPokemons.details);

module.exports = routes;