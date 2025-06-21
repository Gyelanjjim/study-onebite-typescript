/**
 * @desc 배열과 튜플
 */

// 배열
let numArr: number[] = [1, 2, 3];

// 배열 타입을 정의하는 2가지 방법
let strArr: string[] = ["hello", "im", "winterlood"];
// - <> : 제네릭타입
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
// | : 유니언타입
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 에러
// let aar: number[][] = [1,2,3]

let aar2: (number | number[])[] = [1,2,3, [1,2,3]]


// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2]; // 2개의 요소를 담고 둘다 숫자인 경우

let tup2: [number, string, boolean] = [1, "2", true];

tup2.push(1) // 에러가 발생하지 않는다
tup2.pop() // 에러가 발생하지 않는다

// 0번째 string, 1번째 number 요소 타입 정의
const users: [string, number][] = [
  ["이정환", 1],
  ["이아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
  //   [5, "최아무개"], // 에러
];
