const express = require('express');
const { handleErrors } = require('./errorHandling');
const triggerPhlo = require('./controllers/triggerPhlo');
const socket = require('./socket');

const nodeRouter = () => {
  const router = new express.Router();

  router.post('/answer', (req, res) => {
    const {
      StartTime,
      CallStatus,
      EndTime,
    } = req.body;
    console.log('req::: ', req.body);
    res.setHeader('Content-Type', 'application/xml');
    res.status(200).sendFile('./public/5minAsnwer.xml', { root: __dirname });


    // here logic to send req.body details to UI
    console.log('StartTime:: ', StartTime);
    console.log('calling updates1111');
    socket.sendMessage(StartTime, CallStatus, EndTime);
  })
  
  router.get('/call', triggerPhlo.makeCall);
  
  router.use(handleErrors);

  return router;
};

module.exports = nodeRouter;
