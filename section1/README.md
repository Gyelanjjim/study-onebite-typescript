# 정리
## 환경설정
macOS
```bash
# node 버전 LTS 18 이상으로 설치
nvm use lts/hydrogen

# node js 패키지 초기화
npm init -y

# node js 내장 모듈 설치
npm i @types/node
```

tsc 컴파일러
```bash
# typescript 컴파일러 설치(-> js로 변환)
npm i typescript -g

# 컴파일러 버전 확인
tsc -v

# 컴파일 실행
tsc section1/src/index.ts
# => section1/src/index.js 생성

# node 실행
node section1/src/index.js
```
tsx 실행
```bash
# typescript 컴파일 & 실행 패키지 설치
npm i -g tsx

# 실행
tsx section1/src/index.ts
```