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

require('dotenv').config();
const KAKAO_KEY = process.env.KAKAO_KEY;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

const mbtiDB= new Array();
mbtiDB[0] = ['ISTP', 'https://ifh.cc/g/ac3LWB.jpg'];
mbtiDB[1] = ['ISTJ', 'https://ifh.cc/g/VRFgFq.jpg'];
mbtiDB[2] = ['ISFP', 'https://ifh.cc/g/svsfk3.jpg'];
mbtiDB[3] = ['ISFJ', 'https://ifh.cc/g/5LMJjh.jpg'];
mbtiDB[4] = ['INTP', 'https://ifh.cc/g/9HmqMW.jpg'];
mbtiDB[5] = ['INTJ', 'https://ifh.cc/g/sGrpDH.jpg'];
mbtiDB[6] = ['INFP','https://ifh.cc/g/0cK5Rq.jpg'];
mbtiDB[7] = ['INFJ', 'https://ifh.cc/g/34opTR.jpg'];
mbtiDB[8] = ['ESTP', 'https://ifh.cc/g/6wHm7a.jpg'];
mbtiDB[9] = ['ESTJ', 'https://ifh.cc/g/fVGAnT.jpg'];
mbtiDB[10] = ['ESFP', 'https://ifh.cc/g/0S0gk9.jpg'];
mbtiDB[11] = ['ESFJ', 'https://ifh.cc/g/Zh8mVx.jpg'];
mbtiDB[12] = ['ENTP', 'https://ifh.cc/g/opCw8r.jpg'];
mbtiDB[13] = ['ENTJ', 'https://ifh.cc/g/PvlQyS.jpg'];
mbtiDB[14] = ['ENFP', 'https://ifh.cc/g/AArxoZ.jpg'];
mbtiDB[15] = ['ENFJ', 'https://ifh.cc/g/c6GRH1.jpg'];

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
                      text: '[Question 1/20]\n금방 새로운 직장 사람들과 어울리기 시작합니다.'
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
                      text: '[Question 2/20]\n평소 깻잎논쟁에 대해 1시간 이상을 생각해 보는 편입니다.'
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
                        "text": "[Question 3/20]\n토론 시 사람들의 민감한 반응보다 보다 진실을 더 중요시해야 합니다."
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
                      text: "[Question 4/20]\n주의깊게 미리 계획하기 보다는 즉흥적으로 움직입니다."
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
  var mesg = req.body.userRequest.utterance;
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
                      text: '[Question 5/20]\n주목받는 것을 좋아합니다.'
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

apiRouter.post('/question6', (req, res) => {
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
                      text: '[Question 6/20]\n종종 인간 실존에 대한 이유를 생각합니다.'
                  }
              }
          ],
          quickReplies: [
              {
                  action: "block",
                  label: "네",
                  message: "네",
                  blockId: "6297b133f591aa190554a260"
              },
              {
                  action: "block",
                  label: "아니오",
                  message: "아니오",
                  blockId: "6297b133f591aa190554a260"
              }
          ]
      }
  }
  res.status(200).send(responseBody);
});

apiRouter.post('/question7', (req, res) => {
    var userId = req.body.userRequest.user.id;
    var mesg = req.body.userRequest.utterance;
    console.log('[q2:user message] ', mesg);
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
                      text: '[Question 7/20]\n어떤 일에서 성과를 냈을 때 “고생했어”보다 “잘했어”라는 말이 더 좋습니다.'
                  }
              }
          ],
          quickReplies: [
              {
                  action: "block",
                  label: "네",
                  message: "네",
                  blockId: "62977ff05ceed96c385449b9"
              },
              {
                  action: "block",
                  label: "아니오",
                  message: "아니오",
                  blockId: "62977ff05ceed96c385449b9"
              }
          ]
      }
  }
  res.status(200).send(responseBody);
});

apiRouter.post('/question8', (req, res) => {
    var userId = req.body.userRequest.user.id;
    var mesg = req.body.userRequest.utterance;
    console.log('[q2:user message] ', mesg);
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
                        text: '[Question 8/20]\n여행 계획을 어떻게 세우시나요?'
                    }
                }
            ],
            quickReplies: [
                {
                    action: "block",
                    label: "테마만 정한다(ex.맛집 방문하는 날, 사진 찍는 날)",
                    message: "테마만 정한다(ex.맛집 방문하는 날, 사진 찍는 날)",
                    blockId: "629780e9e7a0253c7662cca6"
                },
                {
                    action: "block",
                    label: "시간과 장소를 자세하게 정한다",
                    message: "시간과 장소를 자세하게 정한다",
                    blockId: "629780e9e7a0253c7662cca6"
                }
            ]
        }
    }
    res.status(200).send(responseBody);
  });
  
  apiRouter.post('/question9', (req, res) => {
    var mesg = req.body.userRequest.utterance;
    var userId = req.body.userRequest.user.id;
    var mbti = '';
    if (mesg == "테마만 정한다(ex.맛집 방문하는 날, 사진 찍는 날)"){
      mbti = 'P';
    }
    else if (mesg == "시간과 장소를 자세하게 정한다") {
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
                        text: '[Question 9/20]\n재미있는 책이나 비디오 게임이 사교 모임보다 더 낫습니다.'
                    }
                }
            ],
            quickReplies: [
                {
                    action: "block",
                    label: "네",
                    message: "네",
                    blockId: "629780f4ab89e678ee86b2de"
                },
                {
                    action: "block",
                    label: "아니오",
                    message: "아니오",
                    blockId: "629780f4ab89e678ee86b2de"
                }
            ]
        }
    }
    res.status(200).send(responseBody);
  });
  
  apiRouter.post('/question10', (req, res) => {
    var mesg = req.body.userRequest.utterance;
    var userId = req.body.userRequest.user.id;
    var mbti = '';
    if (mesg == "네"){
      mbti = 'I';
    }
    else if (mesg == "아니오") {
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
                        text: '[Question 10/20]\n본인이 창의적이기보다 현실적인 사람이라고 생각합니다.'
                    }
                }
            ],
            quickReplies: [
                {
                    action: "block",
                    label: "네",
                    message: "네",
                    blockId: "629781015ceed96c385449c8"
                },
                {
                    action: "block",
                    label: "아니오",
                    message: "아니오",
                    blockId: "629781015ceed96c385449c8"
                }
            ]
        }
    }
    res.status(200).send(responseBody);
  });
  
  apiRouter.post('/question11', (req, res) => {
    var mesg = req.body.userRequest.utterance;
    var userId = req.body.userRequest.user.id;
    var mbti = '';
    if (mesg == "네"){
      mbti = 'S';
    }
    else if (mesg == "아니오") {
      mbti = 'N';
    }
    userDB[userId][1] += mbti;
    console.log(userDB[userId]);
    const responseBody = {
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleText: {
                        text: '[Question 11/20]\n팀플을 하는 경우, 무임승차하는 팀원을 제명하기 어려워합니다.'
                    }
                }
            ],
            quickReplies: [
                {
                    action: "block",
                    label: "네",
                    message: "네",
                    blockId: "6297810fe7a0253c7662cca8"
                },
                {
                    action: "block",
                    label: "아니오",
                    message: "아니오",
                    blockId: "6297810fe7a0253c7662cca8"
                }
            ]
        }
    }
    res.status(200).send(responseBody);
  });
  
  apiRouter.post('/question12', (req, res) => {
    var mesg = req.body.userRequest.utterance;
    var userId = req.body.userRequest.user.id;
    var mbti = '';
    if (mesg == "네"){
      mbti = 'F';
    }
    else if (mesg == "아니오") {
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
                        text: '[Question 12/20]\n집과 업무 환경이 잘 정돈되어 있습니다.'
                    }
                }
            ],
            quickReplies: [
                {
                    action: "block",
                    label: "네",
                    message: "네",
                    blockId: "6297811bf591aa190554a22e"
                },
                {
                    action: "block",
                    label: "아니오",
                    message: "아니오",
                    blockId: "6297811bf591aa190554a22e"
                }
            ]
        }
    }
    res.status(200).send(responseBody);
  });
  
  apiRouter.post('/question13', (req, res) => {
    var mesg = req.body.userRequest.utterance;
    var userId = req.body.userRequest.user.id;
    var mbti = '';
    if (mesg == "네"){
      mbti = 'J';
    }
    else if (mesg == "아니오") {
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
                        text: '[Question 13/20]\n친구 관계가 좁고 깊은 편입니다.'
                    }
                }
            ],
            quickReplies: [
                {
                    action: "block",
                    label: "네",
                    message: "네",
                    blockId: "62978127ab89e678ee86b2e2"
                },
                {
                    action: "block",
                    label: "아니오",
                    message: "아니오",
                    blockId: "62978127ab89e678ee86b2e2"
                }
            ]
        }
    }
    res.status(200).send(responseBody);
  });
  
  apiRouter.post('/question14', (req, res) => {
    var mesg = req.body.userRequest.utterance;
    var userId = req.body.userRequest.user.id;
    var mbti = '';
    if (mesg == "네"){
      mbti = 'I';
    }
    else if (mesg == "아니오") {
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
                        text: '[Question 14/20]\n공부하기 싫을 때 공부는 왜 해야 하는 것인지 고민에 빠질 때가 있습니다.'
                    }
                }
            ],
            quickReplies: [
                {
                    action: "block",
                    label: "네",
                    message: "네",
                    blockId: "6294c3ecf591aa1905548230"
                },
                {
                    action: "block",
                    label: "아니오",
                    message: "아니오",
                    blockId: "6294c3ecf591aa1905548230"
                }
            ]
        }
    }
    res.status(200).send(responseBody);
  });

  apiRouter.post('/question15', (req, res) => {
    var mesg = req.body.userRequest.utterance;
    var userId = req.body.userRequest.user.id;
    var mbti = '';
    if (mesg == "네"){
      mbti = 'N';
    }
    else if (mesg == "아니오") {
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
                        text: '[Question 15/20]\n친구가 약속에 늦었을 때'
                    }
                }
            ],
            quickReplies: [
                {
                    action: "block",
                    label: "사과를 하면 마음이 풀린다.",
                    message: "사과를 하면 마음이 풀린다.",
                    blockId: "6294c467e7a0253c7662acac"
                },
                {
                    action: "block",
                    label: "이유가 있으면 마음이 풀린다.",
                    message: "이유가 있으면 마음이 풀린다.",
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
                        text: '[Question 16/20]\n이메일에 가능한 빨리 회신하려고 하고 지저분한 편지함을 참을 수 없습니다.'
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
                        text: '[Question 17/20]\n당일에 갑자기 잡히는 약속은 부담스럽습니다.'
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
                        text: '[Question 18/20]\n비행기에 타기 전 만약 비행기에 테러범이 있으면 어떻게 행동할지 상상해 본 적이 있습니다.'
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
                        text: '[Question 20/20]\n마지막 여행지를 향해 가던 중 흥미로운 장소를 발견했을 때, 남은 일정을 고려하는 편입니다.'
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
    var mbti = ''; 
    if (mesg == "네") {
        mbti = 'J';
    } else if (mesg == "아니오") {
        mbti = 'P';
    }
    userDB[userId][3] += mbti;
    console.log(userDB[userId]);
    analysis_mbti(userDB[userId]);
    var imageurl = url(userDB[userId]);
    const responseBody = {
      version: "2.0",
      template: {
        outputs: [
            {
              "basicCard": {
                "title": "당신의 MBTI는 : "+userDB[userId][4],
                "thumbnail": {
                  "imageUrl": imageurl,
                  "fixedRatio": true,
                  "height": 100,
                  "width": 100
                },
                "buttons": [
                    {
                        action: "share",
                        label: "공유하기",
                        message: "공유하기"
                    },
                    {
                        action: "block",
                        label: "테스트 다시하기",
                        message: "테스트 다시하기",
                        blockId : "6297b10d5ceed96c38544a06"
                    }
                ]
              }
            }
          ],
          quickReplies: [{
            action: "block",
            label: "상세결과보기",
            message: "상세결과보기",
            blockId: "6297bc58ab89e678ee86b33a"
          },
          {
            action: "block",
            label: "내 MBTI 특징은?",
            message: "내 MBTI 특징은?",
            blockId: "629ced645ceed96c38548222"
          },
          {
            action: "block",
            label: "내 MBTI 관련영상 보기",
            message: "내 MBTI 관련영상 보기",
            blockId: "629b6af95ceed96c38547c19"
          }
        ]
      }
  }
  res.status(200).send(responseBody);
});

apiRouter.post('/detail', (req, res) => {
    var userId = req.body.userRequest.user.id;
    var mesg = req.body.userRequest.utterance;
    var E=0;
    var I=0;
    var N=0;
    var S=0;
    var F=0;
    var T=0;
    var P=0;
    var J=0;

    for(let j=0;j<4;j++){
        for(let i=0; i<5; i++){
            if(j==0){
                if(userDB[userId][j][i]=="E"){
                    E++;
                }
                else{
                    I++;
                }
            }
            else if(j==1){
                if(userDB[userId][j][i]=="N"){
                    N++;
                }
                else{
                    S++;
                }
            }
            else if(j==2){
                if(userDB[userId][j][i]=="F"){
                    F++;
                }
                else{
                    T++;
                }
            }
            else if(j==3){
                if(userDB[userId][j][i]=="P"){
                    P++;
                }
                else{
                    J++;
                }
            }
        }
    }
  
  const responseBody = {
      version: "2.0",
      template: {
          outputs: [
              {
                  simpleText: {
                    text: "E와 I의 비율\nE : "+(E/(E+I)*100.0)+"%\nI : "+(I/(E+I)*100.0)+"%\n\nN와 S의 비율\nN : "+(N/(N+S)*100.0)+"%\nS : "+(S/(N+S)*100.0)+"%\n\nF와 T의 비율\nF : "+(F/(F+T)*100.0)+"%\nT : "+(T/(F+T)*100.0)+"%\n\nJ와 P의 비율\nJ : "+(J/(J+P)*100.0)+"%\nP : "+(P/(J+P)*100.0)+"%"
                  }
              }
          ],
          quickReplies: [{
            action: "block",
            label: "테스트 다시하기",
            message: "테스트 다시하기",
            blockId : "6297b10d5ceed96c38544a06"
        },
        {
            action: "block",
            label: "내 MBTI 특징은?",
            message: "내 MBTI 특징은?",
            blockId: "629ced645ceed96c38548222"
        },
        {
            action: "block",
            label: "내 MBTI 관련영상 보기",
            message: "내 MBTI 관련영상 보기",
            blockId: "629b6af95ceed96c38547c19"
        }
      ]
      }
  }
  res.status(200).send(responseBody);
});


function analysis_mbti(userdb) {
    var e = count_mbti(userdb[0], 'E');
    var i = 5-e; 
    var n = count_mbti(userdb[1], 'N');
    var s = 5-n;
    var f = count_mbti(userdb[2], 'F');
    var t = 5-f;
    var j = count_mbti(userdb[3], 'J');
    var p = 5-j;
    if (e > i) {
        userdb[4] += 'E';
    } else {
        userdb[4] += 'I';
    }
    if (n > s) {
        userdb[4] += 'N';
    } else {
        userdb[4] += 'S';
    }
    if (f > t) {
        userdb[4] += 'F';
    } else {
        userdb[4] += 'T';
    }
    if (j > p) {
        userdb[4] += 'J';
    } else {
        userdb[4] += 'P';
    }
}

function count_mbti(item_list, mbti_ch) {
    var result = 0;
    for (var i=0; i<5; i++) {
        if(item_list[i] == mbti_ch){
            result += 1;
        }
    }
    return result;
}

apiRouter.post('/mbtivideo', (req, res) => {
    var userId = req.body.userRequest.user.id;
    var userMbti = userDB[userId][4];
    var api_url = 'https://dapi.kakao.com/v2/search/vclip?query=' + userMbti;
    var request = require('request');
    console.log(api_url);

    var options = {
        url: api_url,
        method: 'GET',
        headers: {
        'Authorization': 'KakaoAK '+ KAKAO_KEY
        },
        encoding: 'UTF-8',
    }

     request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var result = JSON.parse(body);
            console.log(result.documents);
            const responseBody = {
                version: "2.0",
                template: {
                    outputs: [
                        {
                            "listCard" : {
                                "header": {
                                    "title":userMbti+" 관련 영상입니다."
                                },
                                "items": [
                                    {
                                        "title": result.documents[0].title,
                                        "description": result.documents[0].author,
                                        "imageUrl": result.documents[0].thumbnail,
                                        "link":{
                                            "web": result.documents[0].url
                                          }
                                    },
                                    {
                                        "title": result.documents[1].title,
                                        "description": result.documents[1].author,
                                        "imageUrl": result.documents[1].thumbnail,
                                        "link":{
                                            "web": result.documents[1].url
                                          }
                                    },
                                    {
                                        "title": result.documents[2].title,
                                        "description": result.documents[2].author,
                                        "imageUrl": result.documents[2].thumbnail,
                                        "link":{
                                            "web": result.documents[2].url
                                          }
                                    }
                                ]
                            }
                        }
                    ],
                    quickReplies: [{
                        action: "block",
                        label: "테스트 다시하기",
                        message: "테스트 다시하기",
                        blockId : "6297b10d5ceed96c38544a06"
                    },
                    {
                        action: "block",
                        label: "상세결과보기",
                        message: "상세결과보기",
                        blockId: "6297bc58ab89e678ee86b33a"
                    },
                    {
                        action: "block",
                        label: "내 MBTI 특징은?",
                        message: "내 MBTI 특징은?",
                        blockId: "629ced645ceed96c38548222"
                    }
                  ]
                }
            }
            res.status(200).send(responseBody);
        } else {
          res.status(response.statusCode).end();
          console.log('error = ' + response.statusCode);
        }
    });

});

apiRouter.post('/searchMBTI', (req, res) => {
    var userId = req.body.userRequest.user.id;
    var userMbti = userDB[userId][4];
    var api_url = 'https://openapi.naver.com/v1/search/blog?query='+ encodeURI(userMbti + '특징');
    var request = require('request');
    var imageurl = url(userDB[userId]);
    console.log(api_url);
    
    var options = {
        url: api_url,
        headers: {'X-Naver-Client-Id': CLIENT_ID, 'X-Naver-Client-Secret': CLIENT_SECRET}
     };

     request.get(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var result = JSON.parse(body);
            console.log(result.items, "i'm version2");
            const responseBody = {
                version: "2.0",
                template: {
                    outputs: [
                        {
                            "listCard" : {
                                "header": {
                                    "title":userMbti+" 특징은?"
                                },
                                "items": [
                                    {
                                        "title": result.items[0].title.replace(/<b>/g, '').replace(/<\/b>/g, ''),
                                        "description": result.items[0].description.replace(/<b>/g, '').replace(/<\/b>/g, ''),
                                        "link":{
                                            "web": result.items[0].link
                                          }
                                    },
                                    {
                                        "title": result.items[1].title.replace(/<b>/g, '').replace(/<\/b>/g, ''),
                                        "description": result.items[1].description.replace(/<b>/g, '').replace(/<\/b>/g, ''),
                                        "link":{
                                            "web": result.items[1].link
                                          }
                                    },
                                    {
                                        "title": result.items[2].title.replace(/<b>/g, '').replace(/<\/b>/g, ''),
                                        "description": result.items[2].description.replace(/<b>/g, '').replace(/<\/b>/g, ''),
                                        "link":{
                                            "web": result.items[2].link
                                          }
                                    }
                                ]
                            }
                        }
                    ],
                    quickReplies: [{
                        action: "block",
                        label: "테스트 다시하기",
                        message: "테스트 다시하기",
                        blockId : "6297b10d5ceed96c38544a06"
                    },
                    {
                        action: "block",
                        label: "상세결과보기",
                        message: "상세결과보기",
                        blockId: "6297bc58ab89e678ee86b33a"
                    },
                    {
                        action: "block",
                        label: "내 MBTI 관련영상 보기",
                        message: "내 MBTI 관련영상 보기",
                        blockId: "629b6af95ceed96c38547c19"
                    }
                  ]
                }
            }
            res.status(200).send(responseBody);
        } else {
          res.status(response.statusCode).end();
          console.log('error = ' + response.statusCode);
        }
    });

});

function url(user){
    for(let i=0; i<16;i++){
        if(user[4]==mbtiDB[i][0]){
            imageurl=mbtiDB[i][1];
        }
    }
    return imageurl;
}

app.listen((process.env.PORT || 3000), function() {
  console.log('Example skill server listening on port 3000!');
});