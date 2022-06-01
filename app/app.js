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
                      text: '종종 인간 실존에 대한 이유를 생각합니다.'
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
                      text: '어떤 일에서 성과를 냈을 때 “고생했어”보다 “잘했어”라는 말이 더 좋습니다.'
                  }
              }
          ],
          quickReplies: [
              {
                  action: "block",
                  label: "네",
                  message: "네",
                  blockId: "6297b3505ceed96c38544a0a"
              },
              {
                  action: "block",
                  label: "아니오",
                  message: "아니오",
                  blockId: "6297b3505ceed96c38544a0a"
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
      mbti = 'T';
  } else if (mesg == "아니오") {
      mbti = 'F';
  }
  userDB[userId][2] += mbti;
  console.log(userDB[userId]);
  result(userDB[userId]);
  const responseBody = {
      version: "2.0",
      template: {
          outputs: [
              {
                  simpleText: {
                      text: "당신의 MBTI는 : "+userDB[userId][4]
                  }
              }
          ],
          quickReplies: [{
              action: "block",
              label: "MBTI 테스트 다시하기",
              message: "MBTI 테스트 다시하기",
              blockId : "6297b10d5ceed96c38544a06"
          },
          {
              action: "block",
              label: "자세한 결과 보기",
              message: "자세한 결과 보기",
              blockId: "6297bc58ab89e678ee86b33a"
          }]
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
        for(let i=0; i<3; i++){
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
                if(userDB[userId][j][i]=="N"){
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
                    text: "E와 I의 비율\nE : "+(E/(E+I)*100)+"%\nI : "+(I/(E+I)*100)+"\nN와 S의 비율\nN : "+(N/(N+S)*100)+"%\nS : "+(S/(N+S)*100)+"\nF와 T의 비율\nF : "+(F/(F+T)*100)+"%\nT : "+(T/(F+T)*100)+"\nJ와 P의 비율\nJ : "+(J/(J+P)*100)+"%\nP : "+(P/(J+P)*100)
                  }
              }
          ]
      }
  }
  res.status(200).send(responseBody);
});

function result(Array){
    var E=0;
    var I=0;
    var N=0;
    var S=0;
    var F=0;
    var T=0;
    var P=0;
    var J=0;

    for(let j=0;j<4;j++){
        for(let i=0; i<3; i++){
            if(j==0){
                if(Array[j][i]=="E"){
                    E++;
                }
                else{
                    I++;
                }
            }
            else if(j==1){
                if(Array[j][i]=="N"){
                    N++;
                }
                else{
                    S++;
                }
            }
            else if(j==2){
                if(Array[j][i]=="F"){
                    F++;
                }
                else{
                    T++;
                }
            }
            else if(j==3){
                if(Array[j][i]=="N"){
                    P++;
                }
                else{
                    J++;
                }
            }
        }
    }

    if(E>I)
    Array[4]+='E';
    else
    Array[4]+='I';

    if(N>S)
    Array[4]+='N';
    else
    Array[4]+='S';

    if(F>T)
    Array[4]+='F';
    else
    Array[4]+='T';

    if(P>J)
    Array[4]+='P';
    else
    Array[4]+='J';
}

app.listen((process.env.PORT || 3000), function() {
  console.log('Example skill server listening on port 3000!');
});