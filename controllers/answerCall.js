const socket = require('../socket');
var path = require('path');

const { upsertCallDetails } = require("../utils/upsert");

const answerCall = async (req, res) => {
  const {
    AnswerTime,
    CallStatus,
    EndTime,
    Duration,
    BillRate,
    HangupSource,
    HangupCauseName,
    From,
    To,
  } = req.body;

  res.setHeader('Content-Type', 'application/xml');
  res.status(200).sendFile(path.resolve('public/5minAsnwer.xml'));
  socket.sendMessage(AnswerTime, CallStatus, EndTime, Duration);
  const payload = {
    call_status: CallStatus,
    answer_time: AnswerTime,
    end_time: EndTime,
    duration: Duration,
    bill_rate: BillRate,
    hangup_source: HangupSource,
    hangup_cause: HangupCauseName,
  }
  await upsertCallDetails(From, To, payload);
};

module.exports = answerCall;