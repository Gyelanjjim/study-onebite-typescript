/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재합니다
 */

/**
 * 1. 합집합 - Union 타입
 */

let a: string | number | boolean | string[];
a = 1;
a = 'hello';
a = ['aaaa'];
a = true;

let arr: (number | string | boolean)[] = [1, 'hello', true, '1'];

type School = {
    name: string;
    location: string;
};

type Class = {
    id: number;
    name: string;
};

type Union1 = Class | School; // 타입 별칭에도 유니언타입을 선언할 수 있다

// 가능! ---------------------------
let union1: Union1 = {
    name: '',
    location: '',
};

let union2: Union1 = {
    id: 0,
    name: '',
};

let union3: Union1 = {
    id: 0,
    name: '',
    location: '',
};
// -------------------------------

// 에러!
// let union4: Union1 = {
//   name: "",
// };

/**
 * 2. 교집합 타입 - Intersection 타입
 */

let variable: number & string; // => never 타입이 된다!

type Dog = {
    name: string;
    color: string;
};

type Person = {
    name: string;
    dogName: string;
    language: string;
};

type Intersection = Dog & Person;

let intersection1: Intersection = {
    name: '',
    dogName: '',
    color: '',
    language: '',
};
