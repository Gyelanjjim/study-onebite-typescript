/**
 * 타입 단언
 * @desc
 */

type Person = {
    name: string;
    age: number;
};

// 초기값을 빈객체 {} 로 넣고 싶은 경우
// let person: Person = {}; // => 에러! 속성이 없으니까
// let person = {};         // => 에러! 리터럴 빈 객체{}로 추론되므로
let person = {} as Person; // as {{타입}} : type assertion(타입 단언)
person.name = '송철진';
person.age = 32;

type Dog = {
    name: string;
    color: string;
};

// 초과 프로퍼티 검사가 발동!
// let dog2: Dog = {
//     name: '돌돌이',
//     color: 'brown',
//     breed: '진도', // 에러!
// }

let dog = {
    name: '돌돌이',
    color: 'brown',
    breed: '진도',
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never; // number > never
let num2 = 10 as unknown; // number < unknown
// let num21 = 10 as string; // 에러
let num3 = 10 as unknown as string; // 다중단언: 에러는 사라지지만.. 권장하지 않음!

/**
 * const 단언
 * @desc 객체 타입과 사용할 때 활용도가 있다
 */

let num4 = 10 as const;

// 프로퍼티가 굉장히 많은 객체를 readonly 선언하고 싶을 때 const 단언하면 편리하다
let cat = {
    name: '야옹이',
    color: 'yellow',
} as const;

// cat.name = ''

/**
 * Non Null 단언
 */

type Post = {
    title: string;
    author?: string; // 익명게시판은 작성자가 없을 수 있다!
};

let post: Post = {
    title: '게시글1',
    author: '송철진',
};

const length: number = post.author!.length; // ! : non null 단언,  null이거나 undefined 가 아니야! 라고 tsc 가 믿도록 하는 것임
// 단언은 확실할 때만 사용하기!

const len: number = post.author!.length;
