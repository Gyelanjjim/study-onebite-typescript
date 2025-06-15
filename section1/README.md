# 정리
## 환경설정
```bash
# node 버전 LTS 18 이상으로 설치
nvm install 18
nvm install --lts
nvm use lts/hydrogen

# node js 패키지 초기화
npm init -y

# node js 내장 모듈 설치
npm i @types/node
```

tsc 컴파일러 설치
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
---
[tsc] ts -> js 컴파일러 옵션
```bash
# tsconfig.json 생성
tsc --init
```
- include:  tsc에게 컴파일 할 타입스크립트 파일의 범위와 위치를 알려주는 옵션
- complierOptions.target: 컴파일 결과 생성되는 자바스크립트 코드의 버전을 설정 
  - Ex) ES5(구), ESNext(최신)
- complierOptions.module: 자바스크립트 코드의 모듈 시스템을 설정 
  - Ex) CommonJS, ESNext
- complierOptions.outDir: 컴파일 결과 생성할 자바스크립트 코드의 위치를 결정
  - Ex) dist
- compilerOptions.strict: 타입스크립트 컴파일러의 타입 검사 엄격함 수준
  - Ex) true, false
- complierOptions.moduleDetection: 타입스크립트의 모든 파일은 기본적으로 전역 파일(모듈)로 취급. 각 파일에 모듈 시스템 키워드(export, import)를 최소 하나 이상 사용해 해당 파일을 전역 모듈이 아닌 로컬(독립) 모듈로 취급되도록 자동화하는 옵션
  - Ex) force
- compilerOptions.skipLibCheck: 라이브러리의 타입 정의 파일에서 타입 오류가 발생할 때 불필요한 타입정의파일의 타입검사를 생략
---
[tsx]  ts-node와 다르게 tsconfig.json에 별도 설정이 필요하지 않음

---
## 에러 해결
```
node_modules/@types/node/globals.d.ts:319:25 - error TS2792: Cannot find module 'undici-types'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?
```
Node.js의 fetch 관련 타입을 정의하기 위해 내부적으로 undici-types에 의존하고 있습니다.
<br/>Node.js 최신 타입(@types/node 20+)은 fetch, Request 등의 타입을 Node 모듈 방식(node resolution)에 의존합니다.
<br/>=> `npm install --save-dev undici-types`
<br/>=> "moduleResolution": "node" 옵션 추가