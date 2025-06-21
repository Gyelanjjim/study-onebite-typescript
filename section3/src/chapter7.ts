/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은타입에서 좁은타입으로
 * 타입을 상황에 따라 좁히는 방법
 */

type Person = {
    name: string;
    age: number;
};

// value => number 타입이면 toFixed 를 해보자
// value => string 타입이면 toUpperCase 를 해보자
// value => Date 타입이면 getTime 를 해보자
// value => Person 타입이면 name은 age살 입니다. 를 해보자
function func(value: number | string | Date | null | Person) {
    value;
    if (typeof value === 'number') {
        console.log(value.toFixed());
    } else if (typeof value === 'string') {
        console.log(value.toUpperCase());
    }
    // value 가 Date 객체인가
    else if (value instanceof Date) {
        console.log(value.getTime());
    } else if (value && 'age' in value) {
        console.log(`${value.name}은 ${value.age}살 입니다`);
    }
}
function func2(value: number | string | Date | null | Person) {
    switch (typeof value) {
        case 'number':
            return value.toFixed();
        case 'string':
            return value.toUpperCase();
        case 'object':
            if (value === null) {
                return '값이 null 입니다';
            } else if (value instanceof Date) {
                return value.getTime();
            } else if ('age' in value) {
                return `${value.name}은 ${value.age}살 입니다`;
            } else {
                return '알 수 없는 object 타입';
            }
        default:
            return '알 수 없는 타입';
    }
}

let a: Person = {
    name: '송철진',
    age: 32,
};

// const arr:(number | string | Date | null | Person)[] = [0.123, '송철진', new Date(), null, a];
[0.123, '송철진', new Date(), null, a].forEach((v) => {
    console.log(func2(v));
});
/**
 * 0
 * 송철진
 * 1750520342630
 * 값이 null 입니다
 * 송철진은 32살 입니다
 */
