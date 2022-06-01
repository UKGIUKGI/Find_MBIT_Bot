const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const apiRouter = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api', apiRouter);

let userDB = new Array();

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
            },
            "buttons": [
                {
                    "action": "message",
                    "label": "MBTI 테스트 시작하기",
                    "messageText": "MBTI 테스트 시작하기"
                }
            ]
          }
        }
      ]
    }
  };
  res.status(200).send(responseBody);
});

apiRouter.post('/question1', (req, res) => {
    var userId = req.body.userRequest.user.id;
  var mesg = req.body.userRequest;
  console.log('[q1:user message] ', mesg);
  userDB[userId] = ['','','','',''];
  console.log(userDB[userId]);
  const responseBody = {
      version: "2.0",
      template: {
          outputs: [
              {
                  simpleText: {
                      text: '금방 새로운 직장 사람들과 어울리기 시작합니다.'
                  }
              }
          ],
          quickReplies: [
              {
                  action: "block",
                  label: "네",
                  message: "네",
                  blockId: "6297b11ae7a0253c7662ccea"
              },
              {
                  action: "block",
                  label: "아니오",
                  message: "아니오",
                  blockId: "6297b11ae7a0253c7662ccea"
              }
          ]
      }
  }
  res.status(200).send(responseBody);
});

apiRouter.post('/question2', (req, res) => {
    var userId = req.body.userRequest.user.id;
    var mesg = req.body.userRequest.utterance;
    console.log('[q2:user message] ', mesg);
    var mbti = ''; 
    if (mesg == "네") {
        mbti = 'E';
    } else if (mesg == "아니오") {
        mbti = 'I';
    }
    userDB[userId][0] += mbti;
    console.log(userDB[userId]);
    const responseBody = {
      version: "2.0",
      template: {
          outputs: [
              {
                  simpleText: {
                      text: '평소 깻잎논쟁에 대해 1시간 이상을 생각해 보는 편입니다.'
                  }
              }
          ],
          quickReplies: [
              {
                  action: "block",
                  label: "네",
                  message: "네",
                  blockId: "6297b122ab89e678ee86b331"
              },
              {
                  action: "block",
                  label: "아니오",
                  message: "아니오",
                  blockId: "6297b122ab89e678ee86b331"
              }
          ]
      }
  }
  res.status(200).send(responseBody);
});

apiRouter.post('/question3', function(req, res) {
    var userId = req.body.userRequest.user.id;
    var mesg = req.body.userRequest.utterance;
    console.log('[q3:user message] ', mesg);
    var mbti = '';
    if (mesg == '네') {
        mbti = 'N';
    } else if (mesg == '아니오') {
        mbti = 'S';
    }
    userDB[userId][1] += mbti;
    console.log(userDB[userId]);
    const responseBody = {
        version: "2.0",
        template: {
            outputs: [
                {
                    "simpleText": {
                        "text": "토론 시 사람들의 민감한 반응보다 보다 진실을 더 중요시해야 합니다."
                    }
                }
            ],
            quickReplies: [
                {
                    action: "block",
                    label: "네",
                    message: "네",
                    blockId: "6297b1275ceed96c38544a08"
                },
                {
                    action: "block",
                    label: "아니오",
                    message: "아니오",
                    blockId: "6297b1275ceed96c38544a08"
                }
            ]
        }
    };
    res.status(200).send(responseBody);
});

apiRouter.post('/question4', (req, res) => {
    var userId = req.body.userRequest.user.id;
  var mesg = req.body.userRequest.utterance;
  console.log('[q4:user message] ', mesg);
  var mbti = ''; 
  if (mesg == "네") {
      mbti = 'T';
  } else if (mesg == "아니오") {
      mbti = 'F';
  }
  userDB[userId][2] += mbti;
  console.log(userDB[userId]);
  const responseBody = {
      version: "2.0",
      template: {
          outputs: [
              {
                  simpleText: {
                      text: "주의깊게 미리 계획하기 보다는 즉흥적으로 움직입니다."
                  }
              }
          ],
          quickReplies: [
            {
                action: "block",
                label: "네",
                message: "네",
                blockId: "6297b12be7a0253c7662ccec"
            },
            {
                action: "block",
                label: "아니오",
                message: "아니오",
                blockId: "6297b12be7a0253c7662ccec"
            }
        ]
      }
  }
  res.status(200).send(responseBody);
});

apiRouter.post('/question5', (req, res) => {
    var userId = req.body.userRequest.user.id;
  var mesg = req.body.userRequest;
  console.log('[q1:user message] ', mesg);
  var mbti = ''; 
    if (mesg == "네") {
        mbti = 'P';
    } else if (mesg == "아니오") {
        mbti = 'J';
    }
    userDB[userId][3] += mbti;
  console.log(userDB[userId]);
  const responseBody = {
      version: "2.0",
      template: {
          outputs: [
              {
                  simpleText: {
                      text: '주목받는 것을 좋아합니다.'
                  }
              }
          ],
          quickReplies: [
              {
                  action: "block",
                  label: "네",
                  message: "네",
                  blockId: "6297b130e7a0253c7662ccee"
              },
              {
                  action: "block",
                  label: "아니오",
                  message: "아니오",
                  blockId: "6297b130e7a0253c7662ccee"
              }
          ]
      }
  }
  res.status(200).send(responseBody);
});

app.listen((process.env.PORT || 3000), function() {
  console.log('Example skill server listening on port 3000!');
});