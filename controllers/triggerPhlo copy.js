const plivo = require('plivo');
const client = new plivo.Client("MANDYZZDJKMZI3NWVKNW","YjAxZTI1OWU4MGQyMmNmMTRmNzg0MzQyZWY2YjMz");
const {upsertCallerInfo, upsertCalleeInfo, upsertCallDetails } = require('../utils/upsert');

const makeCall = async (req, res) => {

    const test = {
        callerNumber: '+234234',
        callerName: 'Sebashish12',
        calleeNumber: '91123123123',
        calleeName: 'SFDD3232',
    }
    
    await upsertCallerInfo({callerNumber: test.callerNumber, callerName: test.callerName});
    await upsertCalleeInfo({calleeNumber: test.calleeNumber, callerNumber: test.callerNumber, calleeName: test.calleeName});
    await upsertCallDetails(test.callerNumber, test.calleeNumber, {call_status: 'in-complete'});


    const payload = {
        call_status: 'completed',
        answer_time: '2021-05-16 22:52:29',
        end_time: '2021-05-16 22:52:35',
        duration: '60',
        bill_rate: '0.322',
        call_status: 'Completed',
        hangup_source: 'Plivo',
        hangup_cause: 'End Of XML Instructions',
    }
    await upsertCallDetails(test.callerNumber, test.calleeNumber, payload);

    const finalPayload = {
        ...payload,
        ...test
    }
    res.status(200).send(finalPayload);

    // client.calls.create(
    //     "+919668300655", // from
    //     "+918431733315", // to
    //     "https://2bb706c063c7.ngrok.io/api/v1/answer", // answer url
    //     {
    //         answerMethod: "POST",
    //         timeLimit: 10,
    //     },
    // ).then(function (response) {
    //     // console.log('res:::: ', res);
    //     console.log(response);
    //     res.status(200).send('ok')
    // }, function (err) {
    //     console.error(err);
    // });
};

module.exports = {
  makeCall,
};
