const express = require('express');
const { handleErrors } = require('./errorHandling');
const controllers = require('./controllers');
const socket = require('./socket');

const nodeRouter = () => {
  const router = new express.Router();

  router.post('/answer', controllers.answerCall);
  router.post('/call', controllers.makeCall);
  
  router.use(handleErrors);

  return router;
};

module.exports = nodeRouter;
