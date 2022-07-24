
<!-- PROJECT LOGO -->
<br />
<div align="center">

  <img width="300" height="300" src="/Pictures/mbti.jpg">
  <h1 align="center">Find MBTI chatbot</h1>
  <h1 align="center">챗봇으로 자신의 MBTI를 간편하게 찾아 보세요!</h1>

</div>             



## Table of Contents

1. [About The Project](#about-the-project)
2. [Built With](#built-with)
3. [Getting Started](#getting-started)
4. [Usage](#usage)
5. [Roadmap](#roadmap)
6. [Contributing](#contributing)
7. [License](#license)
8. [Contact](#contact)



<!-- ABOUT THE PROJECT -->
## About The Project

* 자신의 MBTI를 알기 위해서는 테스트 사이트를 직접 검색해 접속해야 합니다.
* 저희는 그런 방식보다는 챗봇을 통해 MBTI 테스트를 진행하여 보다 간편하게 MBTI를 알아내고자 했습니다.
* 이 챗봇은 Kakao Messaging API를 기반으로 만들어져 있어, 누구나 쉽게 MBTI 테스트를 진행할 수 있습니다.


<p align="right">(<a href="#top">back to top</a>)</p>



## Built With

* [Node.js](https://nodejs.org/ko/)
* [Express](https://expressjs.com/ko/)
* [Javascript](https://developer.mozilla.org/ko/docs/Web/JavaScript)
* [Naver Open API](https://developers.naver.com/main/)
* [Kakao API](https://developers.kakao.com/)

<p align="right">(<a href="#top">back to top</a>)</p>



## Getting Started

1. 카카오 채널 생성 및 OBT 신청하기
2. 채널 설정  
  - 스킬 생성 : routing이 되는 url 입력  
  - 블록 생성하여 스킬과 연결  
  - 봇 응답 - 스킬데이터 사용 선택
3. Clone the repo
   ```
   git clone http://khuhub.khu.ac.kr/2018103692/find_mbti_bot
   ```
4. 디렉토리에 있는 app.js에서 각 route마다 다음으로 연결될 블록 ID 입력  
   사용자 발화시 req.body.userRequest.block.id나
   i.kakao.com의 블록에서 url을 통해 확인할 수 있음
5. Install Node.js(https://nodejs.org/ko/)
6. Install NPM packages
   ```
   npm install
   ```
7. Put your secret API KEY in `.env`  
    This project needs Naver Open API(Client ID, Client Secret) & Kakao API(Kakao REST API Key)
8. If modules are not installed, enter the following command to install:
   ```
   npm install express --save
   npm install router
   npm install dotenv
   ```
9. 배포 및 실행


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

1. "MBTI 챗봇" 채널을 추가해 주세요.  
   - 카카오톡 채널에 "MBTI 챗봇"을 검색해서 채널을 추가할 수 있습니다.  
   - 또는 하단 챗봇 링크에 접속해서 채널을 추가해 주세요.  
    link: <http://pf.kakao.com/_jAjtb>  
   <img src="/Pictures/channel.jpg" width="270px" height="450px"></img><br/>  
   - 아래의 qr코드를 스캔해서 채널을 추가하셔도 됩니다.  
   <img src="/Pictures/qrcode.jpg" width="250px" height="250px"></img><br/>  
   
2. 채팅창에 "안녕"을 입력하면 챗봇이 메시지를 전송합니다.  
<img src="/Pictures/hello.jpg" width="300px" height="300px"></img><br/>  

3. 전송된 메시지에서 "MBTI 테스트 시작하기" 버튼을 터치하면 MBTI 테스트를 진행할 수 있습니다.  
<img src="/Pictures/test.jpg" width="300px" height="400px"></img><br/>  

4. 20개의 질문에 모두 응답을 하면 MBTI 결과가 나타납니다. 본인의 MBTI 관련 게시물들도 확인할 수 있으니 구경해 보세요!  
<img src="/Pictures/result_new.jpg" width="300px" height="350px"></img><br/>  

5. 테스트를 하다가 처음부터 다시 시작하고 싶을 때에는 채팅창에 "테스트 시작하기"를 입력해 주세요.  


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Kakao 채널 만들기
- [x] express 서버 연결
- [x] test
- [x] MBTI설문을 챗봇에 적용시키기
- [x] 외부 API 사용하기


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

1. Fork the Project
2. Create your Feature Branch
3. Commit your Changes
4. Push to the Branch 
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- License -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

* 김성욱 : so3659@khu.ac.kr
* 공정훈 : kjhun1208@khu.ac.kr
* 고민경: komg00@khu.ac.kr 

* Project Link : http://khuhub.khu.ac.kr/2018103692/find_mbti_bot

<p align="right">(<a href="#top">back to top</a>)</p>