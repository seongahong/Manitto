# manito

## install
- firebase 설치 필요.
  `npm i firebase`
- 최상위에 .env파일 생성 후 firebase관련 키 입력.
- vue-router 설치 필요.
  `npm i vue-router`
- vuex 설치 필요.
  `npm i vuex --save`
- vuex-persistedstate 설치 필요.
  `npm i vuex-persistedstate`


## todo
- [x] 카카오 로그인 sdk 구현
- [x] 각각의 마니또 카카오 계정으로 링크 공유 구현
- [x] 마니또 랜덤 로직 구현
- [x] 로그인 상태 vuex store 저장 후 router 연결 (session storage에 저장까지 완료)
- [ ] 퍼블리싱 구현 (마니또 뽑기 페이지는 완료)
- [x] firestore에 로그인한 계정별 마니또 결과 저장 구현
- [x] 마니또가 해당 uri를 공유받았을 때 본인 마니또 확인 가능해야함.
- [ ] 배포 및 테스트 (firebase배포완료) 
