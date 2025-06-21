/**
 * @desc 객체
 */

// -------------------------
let a: object = {
    id: 1,
    name: '송철진',
};
// a.id; // 에러!
// -------------------------

let dog: {
    // 프로퍼티 구조적 정의 => 구조적 타입 시스템
    name?: string; // ? : 옵셔널 프로퍼티
    color: string;
} = {
    name: '돌돌이',
    color: 'red',
};
const { name, color } = dog;
console.log(`${name}의 색깔은 ${color}입니다`);

let user: {
    id?: number;
    name: string;
} = {
    id: 1,
    name: '이정환',
};

let config: {
    readonly apiKey: string; // readonly 프로퍼티값을 수정하는 것을 막아준다
} = {
    apiKey: 'MY API KEY',
};

// config.apiKey = "hacked";
