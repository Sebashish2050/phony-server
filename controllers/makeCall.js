const config = require('config');
const plivo = require("plivo");
const {
  upsertCallerInfo,
  upsertCalleeInfo,
  upsertCallDetails,
} = require("../utils/upsert");
const socket = require('../socket');

const client = new plivo.Client(
  "MANDYZZDJKMZI3NWVKNW",
  "YjAxZTI1OWU4MGQyMmNmMTRmNzg0MzQyZWY2YjMz"
);

const selfHost = config.get('self_host');

const makeCall = (req, res) => {
  const { callerName, callerNumber, calleeName, calleeNumber, timeLimit = 5 } = req.body;
  if(!callerName || !callerNumber || !calleeName || !calleeNumber) {
    return res.status(400).json({msg: 'bad request'});
  }

  client.calls
    .create(
      callerNumber, // from
      calleeNumber, // to
      `${selfHost}/api/v1/answer`, // answer url
      {
        answerMethod: "POST",
        timeLimit,
      }
    )
    .then(
      async function (response) {
        console.log('response:: ', response);
        socket.sendMessage('', 'in-queued', '', 0);
        await upsertCallerInfo({ callerNumber, callerName });
        await upsertCalleeInfo({ calleeNumber, callerNumber, calleeName });
        res.status(200).json({});
      },
      function (err) {
        socket.sendMessage('', 'incompleted', '', 0);
        throw err;
      }
    );
};

module.exports = makeCall;
