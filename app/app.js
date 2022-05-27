const express = require('express');
const app = express();
//const logger = require('morgan');
const bodyParser = require('body-parser');

const apiRouter = express.Router();

//app.use(logger('dev', {}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api', apiRouter);

apiRouter.post('/sayHello', function(req, res) {
  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          "basicCard": {
            "title": "MBTI 검사 챗봇",
            "description": "MBTI 검사 챗봇입니다! \n당신의 MBTI를 찾아보세요!",
            "thumbnail": {
              "imageUrl": "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fsnm5S%2Fbtq6cSXUkrD%2FOgk9QsUoPzQGvllliI0CSk%2Fimg.jpg"
            }
          }
        }
      ]
    }
  };

  res.status(200).send(responseBody);
});

apiRouter.post('/test', (req, res) => {
  var utt = req.body.userRequest.utterance;
    var data = {
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleText: {
                        text: utt
                    }
                }
            ],
            quickReplies: [{
                action: "block",
                label: "테스트 시작",
                message: "테스트 시작",
                data: {
                    "blockId": "628b8005055a574d7df54466",
                    "extra": {
                        "": ""
                      }
                }
            }]
        }
    }
    res.json(data);
});

app.post('/question1', (req, res) => {
  var mesg = req.body.userRequest;
  console.log('[user message] ', mesg);
  var data = {
      version: "2.0",
      template: {
          outputs: [
              {
                  simpleText: {
                      text: '사람들과 어울리는 것을 좋아하시나요?'
                  }
              }
          ],
          quickReplies: [
              {
              action: "block",
              label: "네",
              message: "네",
              data: {
                  "blockId": "628e8cb07bd2fd433357f878",
                  "extra": {
                      "": ""
                    }
              }
          },
              {
              action: "block",
              label: "아니오",
              message: "아니오",
              data: {
                  "blockId": "628e8cb07bd2fd433357f878",
                  "extra": {
                      "": ""
                    }
              }
              }
          ]
      }
  }
  res.json(data);
});

apiRouter.post('/question3', function(req, res) {
  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          "simpleText": {
            "text": "다음과 같은 상황에서 어떻게 대답하겠습니까? 해당 숫자를 입력해 주세요. \n 친구: 나 기분 안 좋아서 옷 샀어 \n 1. 왜 기분 안 좋아? \n 2. 무슨 옷 샀어?"
          }
        }
      ]
    }
  };

  res.status(200).send(responseBody);
});

apiRouter.post('/Q2', function(req, res) {
  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: '평소 깻잎논쟁에 1시간 이상을 생각해봤다.\n맞다면 N 아니면 S을 입력해주세요.'
            }
          }
        ]
      }
    };

  res.status(200).send(responseBody);
});

apiRouter.post('/A2', function(req, res) {
  
  const userRequest = req.body.userRequest;
  const utter = userRequest.utterance;

const responseBody = {
  version: "2.0",
  template: {
    outputs: [
      {
        simpleText: {
          text: '당신의 MBTI는 *'+utter+'** 입니다.'
        }
      }
    ]
  }}

  res.status(200).send(responseBody);
});


app.listen((process.env.PORT || 3000), function() {
  console.log('Example skill server listening on port 3000!');
});