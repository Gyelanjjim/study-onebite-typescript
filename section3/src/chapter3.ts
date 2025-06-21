/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
    name: string;
    color: string;
};

type Dog = {
    name: string;
    color: string;
    breed: string; // 견종 -> 추가프로퍼티가 있으니까 서브타입이다
};

let animal: Animal = {
    name: '기린',
    color: 'yellow',
};

let dog: Dog = {
    name: '돌돌이',
    color: 'brown',
    breed: '진도',
};

animal = dog; // 다운캐스팅
// dog = animal; // 업캐스팅: 에러

// -----------------------------------------

type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
    name: '한 입 크기로 잘라먹는 리액트',
    price: 33000,
    skill: 'reactjs',
};

book = programmingBook; // 업캐스팅은 되는데
// programmingBook = book; // 다운캐스팅은 안됨

/**
 * 초과 프로퍼티 검사
 */

type Book = {
    name: string;
    price: number;
};

let book2: Book = {
    name: '한 입 크기로 잘라먹는 리액트',
    price: 33000,
    // skill: 'reactjs', // 위에서 업캐스팅은 된다. 하지만! 변수 초기화 시 객체 리터럴을 사용해서 업케스팅을 하면 초과 프로퍼티 검사를 해서 쓸 수 없음!
};

// book2.skill = 'reactjs' // 이것도 에러!

let book3: Book = programmingBook; // 업캐스팅

book3.name = '천로역정';
book3.price = 18000;
// book3.skill = 'none'; // 업캐스팅해서 skill 프로퍼티가 있는데 Book 에는 없어서 접근이 안되네!
console.log(book3);

function func(book: Book) {}
func({
    name: '한 입 크기로 잘라먹는 리액트',
    price: 33000,
    // skill: "reactjs", // 초과 프로퍼티 검사가 발동!
});
func(programmingBook);
