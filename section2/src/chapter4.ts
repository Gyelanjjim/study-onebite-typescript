/**
 * @desc 타입별칭과 인덱스 시그니처
 */

// 타입 별칭: 타입을 변수처럼 정의하여 중복 방지
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};

// type User = {} // => 에러!

function test() {
    type User = string; // => 블록 내에서 선언하는 것은 가능!
}
let aa: number = 0;
if (aa > 0) {
    type User = number;
}

let user: User = {
    id: 1,
    name: '송철진',
    nickname: '계란찜',
    birth: '1992.07.20',
    bio: '안녕하세요',
    location: '서울시',
};

// 인덱스 시그니처
type CountryCodes = {
    // 키와 값의 타입을 정의해준다
    [key: string]: string;
};

// 위에서 선언한 인덱스 시그니처를 타입 별칭으로 정의해준다.
let countryCodes: CountryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: 'uk',
    Indonesia: 'id',
};

type CountryNumberCodes = {
    [key: string]: number;
    // Korea: number;
};

let cnc2: CountryNumberCodes = {}; // 규칙위반할 아무런 프로퍼티가 존재하지 않는 경우에도 허용하므로 주의해야한다

let cnc: CountryNumberCodes = {
    Korea: 410,
    UnitedKingdom: 826,
    UnitedState: 840,
};

// let countryNumberAndStringCodes: CountryNumberCodes = {
//   Korea: "ko",
// };

type CompanyColorCode = {
    [key: string]: number;
    org: number; // 특정 프로퍼티를 꼭 포함해야할때 추가적으로 작성
    // organization: string; // 에러! 타입이 인덱스 시그니처와 일치하거나 호환해야한다
    organization: null; // number 에 null 은 호환된다!
    organization2: undefined; // number 에 undefined 는 호환된다!
};

let companyMap: CompanyColorCode = {
    kakao: 10000,
    danggeun: 20000,
    org: null,
    // organization: 1, // null 로 정의했는데 number 를 할당할순 없다
    organization: undefined, // null 과 undefined 는 상호호환된다!
    organization2: null, //
};
