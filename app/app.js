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

apiRouter.post("/blockId", function(req, res) {
  const userRequest = req.body.userRequest;
  const blockId = userRequest.block.id;

  return res.send({
    version: "2.0",
    template: {
      outputs: [
        {
          "basicCard": {
            "title": "블록ID 입니다",
            "description": blockId
          }
        }
      ]
    }
  });
});

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

var mbtilist = {
  I: false,
  E: false,
  S: false,
  N: false,
  T: false,
  F: false,
  P: false,
  J: false
};

var userDB = {};

apiRouter.post("/add", function(req, res) {
  const userRequest = req.body.userRequest;
  const userId = userRequest.user.id; 
  const usermbti = userRequest.utterance; 

  if (!userDB[userId]) {
    userDB[userId] = { ...mbtilist };
  }

  if (usermbti in mbtilist) {
    userDB[userId][usermbti] = true;
  }

  return res.send({
    version: "2.0",
    template: {
      outputs: [
        {
          basicCard: {
            description: "추가 되었습니다",
            buttons: [
              {
                action: "message",
                label: "내 mbti 목록",
                messageText: "내 mbti 목록"
              },
              {
                action: "message",
                label: "mbti 추가",
                messageText: "mbti 추가"
              }
            ]
          }
        }
      ]
    }
  });
});

apiRouter.post("/form", function(req,res) {
  const userRequest = req.body.userRequest;
  const userId = userRequest.user.id;
  let mbti = [];

  if (!userDB[userId]) {
      mbti = Object.keys(mbtilist).map(f => {
          return {
              action: "block",
              label: f,
              blockId: "62903faf7befc3101c3be587"
          };
      });
  } else {
      mbti = Object.keys(userDB[userId])
      .filter(f => {
          return userDB[userId][f] === false;
      })
      .map(f => {
          return {
              action: "block",
              label: f,
              blockId: "62903faf7befc3101c3be587"
          };
      });
  }

  return res.send({
      version: "2.0",
      template: {
          outputs: [
              {
                  simpleText: {
                      text: "추가할 mbti를 선택해 주세요"
                  }
              }
          ],
          quickReplies: mbti
      }
  });
});

apiRouter.post("/list", function(req, res) {
  const userRequest = req.body.userRequest;
  const userId = userRequest.user.id;
  let mymbti = [];

  if (userDB[userId]) {
    mymbti = Object.keys(userDB[userId]).filter(f => {
      return userDB[userId][f] === true;
    });
  }

  if (mymbti.length <= 0) {
    return res.send({
      version: "2.0",
      template: {
        outputs: [
          {
            basicCard: {
              description: "등록된 mbti가 없습니다",
              buttons: [
                {
                  action: "message",
                  label: "mbti 추가",
                  messageText: "mbti 추가"
                }
              ]
            }
          }
        ]
      }
    });
  } else {
    return res.send({
      version: "2.0",
      template: {
        outputs: [
          {
            basicCard: {
              description: `현재 나의 mbti는 ${mymbti
                .map(f => `[${f}]`)
                .join(", ")} 입니다`,
              buttons: [
                {
                  action: "message",
                  label: "mbti 추가",
                  messageText: "mtbi 추가"
                }
              ]
            }
          }
        ]
      }
    });
  }
});

apiRouter.post('/question1', (req, res) => {
  const responseBody = {
      version: "2.0",
      template: {
          outputs: [
              {
                  basicCard: {
                      title: "사람들과 어울리는 것을 좋아하나요?",
                      buttons: [
                          {
                          label: 'Yes',
                          action: 'message'
                      }, {
                          label: 'No',
                          action: 'message'
                      }
                      ]
                  }
              }
          ]
      }
  }
  res.json(responseBody);
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