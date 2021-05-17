const plivo = require('plivo');
const client = new plivo.Client("MANDYZZDJKMZI3NWVKNW","YjAxZTI1OWU4MGQyMmNmMTRmNzg0MzQyZWY2YjMz");

const makeCall = (req, res) => {
    client.calls.create(
        "+919668300655", // from
        "+918431733315", // to
        "https://2bb706c063c7.ngrok.io/api/v1/answer", // answer url
        {
            answerMethod: "POST",
            timeLimit: 10,
        },
    ).then(function (response) {
        // console.log('res:::: ', res);
        console.log(response);
        res.status(200).send('ok')
    }, function (err) {
        console.error(err);
    });
};

module.exports = {
  makeCall,
};
