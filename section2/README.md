# section1 복습
npm init -y
package.json 에 type: module 추가
npm i @types/node
tsconfig.json 생성
```
{
  "compilerOptions": {
    "target": "ESNext",         // js 버전
    "module": "ESNext",         // 
    "outDir": "dist",           // 컴파일한 js파일 생성 경로
    "strict": true,             // 타입 정의 
    "moduleDetection": "force",
    "moduleResolution": "node",
    "skipLibCheck": true
  },
  "include": ["src"]            // 컴파일할 경로
}
```
tsconfig.json 변경 후 ts 서버 재실행하려면:
[F1] 키 -> restart 입력: [TypeScript: Restart TS server] 실행

# section2
:number -> 타입 어노테이션(주석)


## 1. 원시 타입, 리터럴 타입
tsconfig.json
```js
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "outDir": "dist",
    "strict": true, // 상위 옵션
    "strictNullChecks": false, // null 값을 엄격하게 검사하지 않겠다, 하위 옵션
    "moduleDetection": "force",
    "moduleResolution": "node",
    "skipLibCheck": true
  },
  "include": ["src"]
}
```