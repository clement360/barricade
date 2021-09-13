var AWS = require('aws-sdk');
var QUEUE_URL = 'https://sqs.us-west-2.amazonaws.com/499102898676/commands.fifo';
var sqs = new AWS.SQS({ region: 'eu-east-2' });

exports.handler = async (event) => {
    console.log("Received message", typeof event.body);
    console.log(event.body);

    var body = JSON.parse(event.body);

    console.log(event.body);

    var msg = { 
            payload: {
                command: body.command
            } 
        };

    var sqsParams = {
      MessageBody: JSON.stringify(msg),
      QueueUrl: QUEUE_URL
    };

    console.log("sending to sqs: ", sqsParams);
    await sqs.sendMessage(sqsParams, function (err, data) {
        if (err) {
            console.log('ERR', err);
        }
        console.log("Payload sent to sqs:", data);
    });

    const response = {
        statusCode: 200,
        body: JSON.stringify(sqsParams),
    };

    return response;
};
