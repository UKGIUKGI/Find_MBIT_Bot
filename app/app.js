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

apiRouter.post('/test', (req, res) => {
  const responseBody = {
      version: "2.0",
      template: {
          outputs: [
              {
                  simpleText: {
                      text: 'MBTI 테스트 question8-14\n시작하려면 시작하기 버튼을 눌러주세요!'
                  }
              }
          ],
          quickReplies: [
              {
                  action: "block",
                  label: "시작하기",
                  message: "시작하기",
                  blockId: "62977ff05ceed96c385449b9"
              },
              {
                  action: "block",
                  label: "나중에 하기",
                  message: "나중에 하기",
                  blockId: "6297861be7a0253c7662ccb8"
              }
          ]
      }
  }
  res.status(200).send(responseBody);
});

apiRouter.post('/question8', (req, res) => {
  var userId = req.body.userRequest.user.id;
  userDB[userId] = ['','','','',''];
  console.log(userDB);
  const responseBody = {
      version: "2.0",
      template: {
          outputs: [
              {
                  simpleText: {
                      text: '[question8]\n여행 계획을 어떻게 세우시나요?'
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
  console.log(userDB);
  const responseBody = {
      version: "2.0",
      template: {
          outputs: [
              {
                  simpleText: {
                      text: '[question9]\n재미있는 책이나 비디오 게임이 사교 모임보다 더 낫습니다.'
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
  console.log(userDB);
  const responseBody = {
      version: "2.0",
      template: {
          outputs: [
              {
                  simpleText: {
                      text: '[question10]\n본인이 창의적이기보다 현실적인 사람이라고 생각합니다.'
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
  console.log(userDB);
  const responseBody = {
      version: "2.0",
      template: {
          outputs: [
              {
                  simpleText: {
                      text: '[question11]\n팀플을 하는 경우, 충실하지만 실적을 못 내는 팀원을 제명하기 어려워합니다.'
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
  console.log(userDB);
  const responseBody = {
      version: "2.0",
      template: {
          outputs: [
              {
                  simpleText: {
                      text: '[question12]\n집과 업무 환경이 잘 정돈되어 있습니다.'
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

app.listen((process.env.PORT || 3000), function() {
  console.log('Example skill server listening on port 3000!');
});