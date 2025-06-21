# 타입스크립트 이해하기

## 1. 타입은 집합이다

![](타입계층도.png)

number type (부모타입, 슈퍼타입)

```js
let n: number = 10;
n = Infinity;
n = 0.11;
n = -11;
```

number literal type (자식타입, 서브타입)

```js
let a: 10 = 10;
```

타입호환성: 어떤 타입을 다른 타입으로 취급해도 괜찮은지 판단하는 것

```js
let 슈퍼: number = 10;
let 서브: 10 = 10;
서브 = 슈퍼; // 다운캐스팅: 거의 안된다! 슈퍼가 10이 아닌 다른 값이 될 수 있으니까
슈퍼 = 서브; // 업캐스팅: 항상 가능
```

-   number literal 타입은 number 타입이다(O)
-   number 타입은 number literal 타입이다(X)
