const express = require('express');
const CampanhaController = require('./controllers/CampanhaController');

const routes = express.Router();



routes.post('/campanhas', CampanhaController.store);
routes.get('/campanhas', CampanhaController.index);
module.exports = routes;