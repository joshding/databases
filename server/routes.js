var controller = require('./controllers');
var router = require('express').Router();

//this is where they're using controller helper functions in messages.js and users.js
//Connect controller methods to their corresponding routes
console.log('router initialized');
router.get('/messages', controller.messages.get);

router.post('/messages', controller.messages.post);

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);


module.exports = router;

