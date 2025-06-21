/**
 * @desc void, never 타입
 */

// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
    // 매개변수 뒤에 반환값 타입을 정의할 수 있다
    return 'hello';
}

let aa: void;
// aa = 1; // 에러!
// aa = '1'; // 에러!
// aa = []; // 에러!
aa = null;
aa = undefined;

// null, undefined 는 정말 그 값을 반환해야하기 때문에 아무것도 반환하고 싶지 않다면 void 로!
const aa2 = (): null => null;
const aa3 = (): undefined => undefined;
const aa4 = (): void => {};

function func2(): void {
    console.log('hello');
}

// never
// never -> 존재하지 않는
// 불가능한 타입

// 절대로 반환값이 존재할 수 없어서 반환값이 존재하는 것이 모순이다! 싶을 때
function func3(): never {
    while (true) {}
}

// 실행 시 바로 프로그램이 중지되는 경우!
function func4(): never {
    throw new Error();
}

let anyVar: any;

let a: never;
// a = 1;
// a = {};
// a = "";
// a = undefined;
// a = null;
// a = anyVar;
// never 타입에는 그 어떤 타입도 담을 수 없다!
