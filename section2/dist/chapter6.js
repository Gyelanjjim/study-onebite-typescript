// any
// 특정 변수의 타입을 우리가 확실히 모를때
let anyVar = 10;
let num = 10;
num = anyVar;
// unknown
let unknownVar;
unknownVar = "";
unknownVar = 1;
unknownVar = () => { };
if (typeof unknownVar === "number") {
    num = unknownVar;
}
export {};
