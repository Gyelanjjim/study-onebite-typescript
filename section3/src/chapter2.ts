/**
 * Unknown 타입
 * @desc 모든 타입의 슈퍼타입이기 때문에 모든 값을 넣을 수 있다.(업캐스팅)
 */

function unknownExam() {
    let a: unknown = 1;
    let b: unknown = 'hello';
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    let unknownVar: unknown;

    //   let num: number = unknownVar; // 다운캐스팅은 에러!
    //   let str: string = unknownVar; // 다운캐스팅은 에러!
    //   let bool: boolean = unknownVar; // 다운캐스팅은 에러!
}

/**
 * Never 타입
 * @desc 모든 타입의 서브타입이기 때문에 모든 값에 저장할 수 있다.(다운캐스팅)
 */

function neverExam() {
    // 반환할 수 있는 값이 없다 = 공집합이다
    function neverFunc(): never {
        while (true) {}
    }

    let num: number = neverFunc(); // 업캐스팅 가능!
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    //   let never1: never = 10;
    //   let never2: never = "string";
    //   let never3: never = true;
}

/**
 * Void 타입
 */

function voidExam() {
    function voidFunc(): void {
        console.log('hi');
        return undefined; // undefined 는 void 보다 서브 타입이므로 업캐스팅 가능!
    }

    let voidVar: void = undefined; // 업캐스팅
}

/**
 * any 타입
 * @desc 웬만하면 사용하지 않는 것을 추천
 */

function anyExam() {
    let numberVar: number;
    let nullVar: null;
    let voidVar: void;
    let bigIntVar: bigint;
    let booleanVar: boolean;
    let stringVar: string;
    let symbolVar: symbol;
    let objectVar: object;
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    // any 타입 한정으로 다운캐스팅 받는 것도 하는 것도 가능하다(never 제외)
    anyVar = unknownVar;
    numberVar = anyVar;
    nullVar = anyVar;
    voidVar = anyVar;
    bigIntVar = anyVar;
    booleanVar = anyVar;
    stringVar = anyVar;
    symbolVar = anyVar;
    objectVar = anyVar;
    undefinedVar = anyVar;

    // neverVar = anyVar; // 그 어떤 타입도 never 타입에는 다운캐스팅 안된다
}
