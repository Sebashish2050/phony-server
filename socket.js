let wsCon = null;
const intializeWebSocket = (wss) => {
  wss.on('connection', (ws) => {
    wsCon = ws;
    var msg = {
      type: "message",
      details: {callStatus: 'Hi there, socket server is up'},
    };
    ws.send(JSON.stringify(msg));
  });
};

const sendMessage = (startTime, callStatus, endTime ) => {
  if(wsCon) {
    console.log('inside send message:: ', message);
    var msg = {
      type: "event",
      details: {startTime, callStatus, endTime},
    };
    wsCon.send(JSON.stringify(msg));
  }
}

module.exports = {
  intializeWebSocket,
  sendMessage,
};