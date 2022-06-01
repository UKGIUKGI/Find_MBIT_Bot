const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const apiRouter = express.Router();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api', apiRouter);

function createArray(rows, columns) {
  var arr = new Array(rows);
  for (var i = 0; i < rows; i++) {
    arr[i] = new Array(columns);
  }
  return arr;
}
var userDB = createArray(5, 5);

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
                      text: 'MBTI 테스트 question8-14'
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

app.listen((process.env.PORT || 3000), function() {
  console.log('Example skill server listening on port 3000!');
});