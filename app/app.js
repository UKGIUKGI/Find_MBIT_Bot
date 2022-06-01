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

apiRouter.post('/test', (req, res) => {
    const responseBody = {
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleText: {
                        text: '재밌는 MBTI 테스트'
                    }
                }
            ],
            quickReplies: [
                {
                    action: "block",
                    label: "할래!",
                    message: "할래!",
                    blockId: "6294c3ecf591aa1905548230"
                },
                {
                    action: "block",
                    label: "안 할래",
                    message: "안 할래",
                    blockId: "628b7ef293b31d5b60ab4b29"
                }
            ]
        }
    }
    res.status(200).send(responseBody);
});

apiRouter.post('/question15', (req, res) => {
    var userId = req.body.userRequest.user.id;
    userDB[userId] = ['','','','',''];
    const responseBody = {
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleText: {
                        text: '[Question 15/20]\n친구: 우울해서 아이패드 샀어'
                    }
                }
            ],
            quickReplies: [
                {
                    action: "block",
                    label: "왜ㅠㅠ무슨일 있었어?",
                    message: "왜ㅠㅠ무슨일 있었어?",
                    blockId: "6294c467e7a0253c7662acac"
                },
                {
                    action: "block",
                    label: "어떤 기종샀어?",
                    message: "어떤 기종샀어?",
                    blockId: "6294c467e7a0253c7662acac"
                }
            ]
        }
    }
    res.status(200).send(responseBody);
});

apiRouter.post('/question16', (req, res) => {
    var userId = req.body.userRequest.user.id;
    var mesg = req.body.userRequest.utterance;
    var mbti = ''; 
    if (mesg == "왜ㅠㅠ무슨일 있었어?") {
        mbti = 'F';
    } else if (mesg == "어떤 기종샀어?") {
        mbti = 'T';
    }
    userDB[userId][2] += mbti;
    console.log(userDB[userId]);
    const responseBody = {
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleText: {
                        text: '[Question 16/20]\n이메일에 가능한 빨리 회신하려고 하고 지저분한 편지함을 참을 수 없다.'
                    }
                }
            ],
            quickReplies: [
                {
                    action: "block",
                    label: "네",
                    message: "네",
                    blockId: "6294c4755ceed96c38542a53"
                },
                {
                    action: "block",
                    label: "아니오",
                    message: "아니오",
                    blockId: "6294c4755ceed96c38542a53"
                }
            ]
        }
    }
    res.status(200).send(responseBody);
});

apiRouter.post('/question17', (req, res) => {
    var userId = req.body.userRequest.user.id;
    var mesg = req.body.userRequest.utterance;
    var mbti = ''; 
    if (mesg == "네") {
        mbti = 'J';
    } else if (mesg == "아니오") {
        mbti = 'P';
    }
    userDB[userId][3] += mbti;
    console.log(userDB[userId]);
    const responseBody = {
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleText: {
                        text: '[Question 17/20]\n당일에 갑자기 잡히는 약속이 부담스럽다.'
                    }
                }
            ],
            quickReplies: [
                {
                    action: "block",
                    label: "네",
                    message: "네",
                    blockId: "6294c4aff591aa1905548236"
                },
                {
                    action: "block",
                    label: "아니오",
                    message: "아니오",
                    blockId: "6294c4aff591aa1905548236"
                }
            ]
        }
    }
    res.status(200).send(responseBody);
});

apiRouter.post('/question18', (req, res) => {
    var userId = req.body.userRequest.user.id;
    var mesg = req.body.userRequest.utterance;
    var mbti = ''; 
    if (mesg == "네") {
        mbti = 'I';
    } else if (mesg == "아니오") {
        mbti = 'E';
    }
    userDB[userId][0] += mbti;
    console.log(userDB[userId]);
    const responseBody = {
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleText: {
                        text: '[Question 18/20]\n비행기에 타기 전 만약 비행기에 테러범이 있으면 어떻게 행동할지 상상해봤다.'
                    }
                }
            ],
            quickReplies: [
                {
                    action: "block",
                    label: "네",
                    message: "네",
                    blockId: "6294c4c2e7a0253c7662acb1"
                },
                {
                    action: "block",
                    label: "아니오",
                    message: "아니오",
                    blockId: "6294c4c2e7a0253c7662acb1"
                }
            ]
        }
    }
    res.status(200).send(responseBody);
});

apiRouter.post('/question19', (req, res) => {
    var userId = req.body.userRequest.user.id;
    var mesg = req.body.userRequest.utterance;
    var mbti = ''; 
    if (mesg == "네") {
        mbti = 'N';
    } else if (mesg == "아니오") {
        mbti = 'S';
    }
    userDB[userId][1] += mbti;
    console.log(userDB[userId]);
    const responseBody = {
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleText: {
                        text: '[Question 19/20]\n친구가 취업이 안돼서 힘들어하는 상황에 당신의 반응은?'
                    }
                }
            ],
            quickReplies: [
                {
                    action: "block",
                    label: "요즘 취업 어렵지 힘들겠다ㅠㅠ",
                    message: "요즘 취업 어렵지 힘들겠다ㅠㅠ",
                    blockId: "6294c4c8e7a0253c7662acb3"
                },
                {
                    action: "block",
                    label: "무슨 준비하고있어? 이력서는 넣어봤어?",
                    message: "무슨 준비하고있어? 이력서는 넣어봤어?",
                    blockId: "6294c4c8e7a0253c7662acb3"
                }
            ]
        }
    }
    res.status(200).send(responseBody);
});

apiRouter.post('/question20', (req, res) => {
    var userId = req.body.userRequest.user.id;
    var mesg = req.body.userRequest.utterance;
    var mbti = ''; 
    if (mesg == "요즘 취업 어렵지 힘들겠다ㅠㅠ") {
        mbti = 'F';
    } else if (mesg == "무슨 준비하고있어? 이력서는 넣어봤어?") {
        mbti = 'T';
    }
    userDB[userId][2] += mbti;
    console.log(userDB[userId]);
    const responseBody = {
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleText: {
                        text: '[Question 20/20]\n마지막 여행지를 향해 가던 중 흥미로운 장소를 발견했을 때, 남은 일정을 고려하는 편이다.'
                    }
                }
            ],
            quickReplies: [
                {
                    action: "block",
                    label: "네",
                    message: "네",
                    blockId: "6293885b7bd2fd4333583df0"
                },
                {
                    action: "block",
                    label: "아니오",
                    message: "아니오",
                    blockId: "6293885b7bd2fd4333583df0"
                }
            ]
        }
    }
    res.status(200).send(responseBody);
});

apiRouter.post('/result', (req, res) => {
    var userId = req.body.userRequest.user.id;
  var mesg = req.body.userRequest.utterance;
  console.log('[result:user message] ', mesg);
  var mbti = ''; 
  if (mesg == "네") {
      mbti = 'J';
  } else if (mesg == "아니오") {
      mbti = 'P';
  }
  userDB[userId][3] += mbti;
  console.log(userDB[userId]);
  const responseBody = {
      version: "2.0",
      template: {
          outputs: [
              {
                  simpleText: {
                      text: "당신의 MBTI는 : "+userDB[userId]
                  }
              }
          ],
          quickReplies: [{
              action: "block",
              label: "MBTI 테스트 다시하기",
              message: "MBTI 테스트 다시하기",
              blockId : "628b7ef293b31d5b60ab4b29" //to question 1
          }]
      }
  }
  res.status(200).send(responseBody);
});

app.listen((process.env.PORT || 3000), function() {
  console.log('Example skill server listening on port 3000!');
});