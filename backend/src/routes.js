const express = require('express');
const { celebrate, Joi, Segments } = require('celebrate');

const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const CaseController = require('./controllers/CaseController');

const routes = express.Router();

routes.post('/sessions', SessionController.store);

routes.get('/ongs', OngController.index);

routes.post('/ongs', OngController.store);

routes.get('/profiles', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.store);
routes.patch('/incidents/:id', IncidentController.update);
routes.delete('/incidents/:id', IncidentController.destroy);

routes.get('/cases', CaseController.index);

module.exports = routes;