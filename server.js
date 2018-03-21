
const express = require('express');
const bodyParser = require('body-parser');
const request = require("request");
const app = express();
app.use(bodyParser.json())

// API
app.post('/subscribe', (req, res) => {
    let options = { method: 'POST',
        url: 'https://us11.api.mailchimp.com/3.0/lists/09974129e1/members',
        headers: { 
            authorization: 'Basic aXNhYWNnMTE6ZDg0Y2IwMzFkYjVlN2I4NzRiMDQxNDYxY2M2Njg2ODgtdXMxMQ==',
            'content-type': 'application/json' 
        },
        body: { 
            email_address: req.body.userEmail,
            status: 'subscribed' 
        },
        json: true 
    };

    request(options, (err, response, body) => {
        res.sendStatus((err) ? 500 : 200)
    })
})

// SERVER CONFIG
app.listen(5000, () => {
    console.log('server running')
})

