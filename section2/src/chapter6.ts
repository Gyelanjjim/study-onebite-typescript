/**
 * @desc any, unknown 타입
 */

// any
// 특정 변수의 타입을 우리가 확실히 모를때

let anyVar: any = 10;
anyVar = 1;
anyVar = '1';
anyVar = {};
anyVar = () => {};

anyVar.toFixed();
anyVar.push(1);
anyVar.id;
// 타입검사는 다 통과한다 근데 런타임에서 에러가 발생한다!

let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;

unknownVar = '';
unknownVar = 1;
unknownVar = () => {};
// unknown 타입은 할당은 가능하다

// unknownVar.toFixed();
// unknownVar.toUpperCase();
// unknownVar.push(1);
// unknownVar.id;
// 근데 이런 메서드는 쓸 수 없다
// 그리고 모든 타입에는 unknown 타입 변수를 할당할 수 없다
// num = unknownVar; // 에러!

if (typeof unknownVar === 'number') {
    // 활용하고 싶다면 조건문으로 '타입 정제'하여 사용할 수 있다
    num = unknownVar;
}
