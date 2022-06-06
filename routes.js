const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const customerController = require('./src/controllers/customerController')
const contactController = require('./src/controllers/contactController')
const { loginRequired } = require('./src/middlewares/middleware');

route.get('/', homeController.index);

// Login routes
route.get('/login/index', loginController.index);
//route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);
route.get('/contact/index', contactController.index);

route.get('/customer/index', loginRequired, customerController.index);
route.post('/customer/register', loginRequired, customerController.register);
//route.get('/customer/index/:id', loginRequired, customerController.editIndex);
//route.post('/customer/edit/:id', loginRequired, customerController.edit);
//route.get('/customer/delete/:id', loginRequired, customerController.delete);


module.exports = route;