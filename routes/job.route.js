const epxress = require('express');
const route = epxress.Router();
const jobModel = require('../models/job.model');
const sequelize = require('sequelize');
const Op = sequelize.Op;

const displayController = require('../controllers/display.controller')
const actionController = require('../controllers/action.controller')

route.get('/', displayController.displayAll)

// display add job form
route.get('/add', displayController.displayAdd)

// add newjob
route.post('/add', actionController.actionAdd)

// search
route.get('/search', actionController.actionSearch)

// detail job
route.get('/:id', displayController.displayDetail)




module.exports = route;