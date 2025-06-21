/**
 * 타입 추론
 * @desc 변수의 타입을 자동으로 추론한다
 */

// 타입을 정의해주지 않아도 초기값을 할당해주면 자동으로 추론해준다! => 코드 간결, 생산성
let a = 10; // 초기값을 기준으로 타입을 추론한다
let b = 'hello';
let c = {
    id: 1,
    name: '송철진',
    profile: {
        nickname: 'winterlood',
    },
    urls: ['https://winterlood.com'],
};

let { id, name, profile } = c;

let [one, two, three] = [1, 'hello', true];

function func(message = 'hello') {
    return message;
    // return 'hello';
}

// 초기값 미할당 시 암묵적 any 타입으로 추론! any 진화
let d; // any
d = 10;
d.toFixed(); // number 로 진화

d = 'hello';
d.toUpperCase(); // string 으로 진화
// d.toFixed(); // 에러!

// 타입 진화가 될 수 있다는 것만 알아두고 실제 사용은 추천하지 않는다.

// const 로 선언하면 리터럴타입으로 추론된다!
const num = 10; // number literal
const str = 'hello'; // string literal

let arr = [1, 'string']; // string, number 유니온 배열 타입
arr.push(12);
arr.push('123');
const arr2 = []; // any[]
arr2.push(1, 2, 3, 4, '6');
console.log(arr, arr2);
