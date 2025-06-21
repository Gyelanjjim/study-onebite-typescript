/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말함
 */
enum AccessLevel {
    ADMIN,
    MEMBER,
    GUEST,
}

type Admin = {
    tag: AccessLevel.ADMIN; // AccessLevel['ADMIN'] 은 안된다
    name: string;
    kickCount: number;
};

type Member = {
    tag: AccessLevel.MEMBER;
    name: string;
    point: number;
};

type Guest = {
    tag: AccessLevel.GUEST;
    name: string;
    visitCount: number;
};

type User = Admin | Member | Guest; // tag 가 서로 겹칠 수 없는 enum 멤버값 리터럴이기 때문에 User 는 서로소 유니언 타입이라고 부른다.
// => 원래 강의에서는 string 리터럴이었는데 enum 으로 선언해서 수정함!

function login(user: User) {
    switch (user.tag) {
        case AccessLevel.ADMIN: {
            console.log(
                `${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`
            );
            break;
        }
        case AccessLevel.MEMBER: {
            console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
            break;
        }
        case AccessLevel.GUEST: {
            console.log(
                `${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다`
            );
            break;
        }
    }
}

[
    {
        tag: AccessLevel.ADMIN,
        name: '이동국',
        kickCount: 1,
    } as User,
    {
        tag: AccessLevel.MEMBER,
        name: '안정환',
        point: 33,
    } as User,
    {
        tag: AccessLevel.GUEST,
        name: '송철진',
        visitCount: 23,
    } as User,
].forEach((v) => {
    login(v);
});

/**
 * 이동국님 현재까지 1명 강퇴했습니다.
 * 안정환님 현재까지 33모았습니다
 * 송철진님 현재까지 23번 방문하셨습니다
 */

/**
 * 복습겸 한가지 더 사례
 */

// 비동기 작업의 결과를 처리하는 객체

enum state {
    LOADING,
    FAILED,
    SUCCESS,
}

type LoadingTask = {
    state: state.LOADING;
};

type FailedTask = {
    state: state.FAILED;
    error: {
        message: string;
    };
};

type SuccessTask = {
    state: state.SUCCESS;
    response: {
        data: string;
    };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

// 비동기 작업 처리결과를 표시하는 함수
function processResult(task: AsyncTask) {
    switch (task.state) {
        case state.LOADING: {
            console.log('로딩 중');
            break;
        }
        case state.FAILED: {
            console.log(`에러 발생 : ${task.error.message}`);
            break;
        }
        case state.SUCCESS: {
            console.log(`성공 : ${task.response.data}`);
            break;
        }
    }
}

const loading: AsyncTask = {
    state: state.LOADING,
};

const failed: AsyncTask = {
    state: state.FAILED,
    error: {
        message: 'db error',
    },
};

const success: AsyncTask = {
    state: state.SUCCESS,
    response: {
        data: 'succes insert data',
    },
};
[loading, failed, success].forEach((v) => {
    processResult(v);
});
/**
 * 로딩 중
 * 에러 발생 : db error
 * 성공 : succes insert data
 */

type Call = {
    (value: number): void;
};

type Call2 = (value: number) => void;

const call: Call2 = (value) => {
    console.log(`음성 메시지 ${value} 건 있습니다`);
};

call(1);
