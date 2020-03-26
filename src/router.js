const express = require('express');
const empresaController = require('empresaController');
const vagaController = require('vagaController');
const recrutadorController = require('recrutadoresaController');
const sessionController = require('sessionController');

const routes = express.Router();

routes.post('/empresa', empresaController.create );
routes.get('/empresa', empresaController.list );
routes.delete('/empresa/:id', empresaController.delete);

routes.post('/vaga', vagaController.create );
routes.get('/vaga', vagaController.list );

routes.post('/recrutador', recrutadorController.create );
routes.get('/recrutador', recrutadorController.list );

routes.post('/session', sessionController.create );

module.exports = routes;