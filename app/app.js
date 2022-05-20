const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParse.json());

app.post('/api/sayHello', (req, res) => {
    const responseBody = { //skill response
        version: "2.0", //version 필수
        template: { // template 필수
            outputs: [
                {
                    simpleText: {
                        text: "hello I'm Ryan"
                    }
                }
            ]
        }
    };
    res.status(200).send(responseBody);
});

app.post('/api/showHello', (req, res) => {
    console.log(req.body);
    const responseBody = {
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleImage: {
                        imageUrl: "https://t1.daumcdn.net/friends/prod/category/M001_friends_ryan2.jpg",
                        altText: "hello I'm Ryan"
                    }
                }
            ]
        }
    };
    res.status(200).send(responseBody);
});

app.post('/message', (req, res) => {
    const question = req.body.userRequest.utterance;
    if (question === 'test') {
        const responseBody = {
            version: "2.0",
            template: {
                outputs: [
                    {
                        simpleText: {
                            text: "text..."
                        }
                    }
                ],
                quickReplies: [
                    {
                        label: 'go main',
                        action: 'message',
                        messageText: 'go main'
                    }
                ]
            }
        };
        res.status(200).send(responseBody);
    }
})

var server = app.listen(3000);