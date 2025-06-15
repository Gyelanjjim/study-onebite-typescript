// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입
function func1() {
    return "hello";
}
function func2() {
    console.log("hello");
}
// never
// never -> 존재하지 않는
// 불가능한 타입
function func3() {
    while (true) { }
}
function func4() {
    throw new Error();
}
let anyVar;
let a;
export {};
// a = 1;
// a = {};
// a = "";
// a = undefined;
// a = null;
// a = anyVar;
