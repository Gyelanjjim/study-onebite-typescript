/**
 * @desc ENUM 타입: 열거형 타입. ts only
 */

// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

//----------------------------
// 접근권한 0~2 를 정의했지만 까먹거나 실수로 수정하는 경우가 발생할 수 있는데 enum 으로 정의하면 효율적 관리 가능
const user11 = {
    name: '송철진',
    accessLevel: 0,
};
const user12 = {
    name: '송철진',
    accessLevel: 1,
};
const user13 = {
    name: '송철진',
    accessLevel: 2,
};
//----------------------------

enum AccessLv {
    ALevel,
    BLevel = 998, // 자동으로 이하 +1 씩 할당된다 => 숫자형 enum
    GUEST,
    USER,
}

console.log(AccessLv);
/**
 * {
  '0': 'ALevel',
  '998': 'BLevel',
  '999': 'GUEST',
  '1000': 'USER',
  ALevel: 0,
  BLevel: 998,
  GUEST: 999,
  USER: 1000
}
 */
// tsc 컴파일 시: enum 은 사라지지 않는다! 객체로 변환된다
// var AccessLv;
// (function (AccessLv) {
//     AccessLv[AccessLv["ALevel"] = 0] = "ALevel";
//     AccessLv[AccessLv["BLevel"] = 998] = "BLevel";
//     AccessLv[AccessLv["GUEST"] = 999] = "GUEST";
//     AccessLv[AccessLv["USER"] = 1000] = "USER";
// })(AccessLv || (AccessLv = {}));
// console.log(AccessLv);

enum Role {
    ADMIN, // 자동으로 위부터 차례로 0, 1, 2, ... 할당된다
    USER,
    GUEST,
}

enum Language {
    korean = 'ko', // 문자형 enum
    english = 'en',
}

const user1 = {
    name: '송철진',
    role: Role.ADMIN, // 0 <- 관리자
    language: Language.korean,
};

const user2 = {
    name: '홍길동',
    role: Role.USER, // 1 <- 일반 유저
    language: Language.english,
};

const user3 = {
    name: '아무개',
    role: Role.GUEST, // 2 <- 게스트
};

console.log(user1, user2, user3);
/**
 * { name: '송철진', role: 0, language: 'ko' } { name: '홍길동', role: 1, language: 'en' } { name: '아무개', role: 2 }
 */
