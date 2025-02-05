/**
 * Data Types
 * 
 * 여섯개의 Primitive Type과
 * 한개의 오브젝트 타입이 있다.
 * 
 * 1) Number (숫자)
 * 2) string (문자열)
 * 3) Boolean (불리인)
 * 4) undefined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼)
 * 
 * 7) Object (객체)
 *    Fuction
 *    Array
 *    Object
 */

/**
 * Number 타입
 */
const age = 32;
const tempature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log('-------------');

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);
/**
 * String 타입
 */
const codeFactory = '코드팩토리';
console.log(typeof codeFactory);

const ive ="'아이브' 안유진";
console.log(ive);

/**
 * Template Literal
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고싶다면 두번 입력하면 된다.
 * 
 */

const iveYuJIn = '아이브\n안유진'
console.log(iveYuJIn);
const iveWonYoung = '아이브\t장원영'
console.log(iveWonYoung);
const backSlash = '아이브\\코드팩토리'
console.log(backSlash);

const smallQutoation = '아이브\'코드팩토리';
console.log(smallQutoation);

const iveWonYoung2 = `아이브
장원영`; // tab키위에 존재
console.log(iveWonYoung2);
console.log(typeof iveWonYoung2);

const groupName = '아이브';
console.log(groupName + ' 안유진');
console.log(`${groupName} 안유진`);

/**
 * Boolean 타입
 */

const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);

/**
 * Undefined
 * 
 * 사용자가 직접 값을 초기화하지 않았을때
 * 지정되는 값이다.
 */
let noInit;
console.log(noInit);
console.log(typeof noInit);

/**
 * Null
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화할때
 * 사용된다.
 */
let init = null;
console.log(init);
console.log(typeof init);

/**
 * Symbol
 * 
 * 유일무이한 값을 생성할때 사용한다.
 * 다른 프리미티브 값들과 다르게 Symbol 함수를 호출해서 사용
 */
const test1='1';
const test2 = '1';

console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 == symbol2);

/**
 * Object
 * 
 * Map
 * 키:벨류 쌍으로 이루어져있다.
 * key:value
 */
const dictionary = {
    red:'빨간색',
    orange:'주황색',
    yellow:'노란색',
};

console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(dictionary['yellow']);

console.log(typeof dictionary);

/**
 * Array
 * 
 * 값을 리슽로 나열 할 수 있는 타입이다.
 */

const iveMembersArray = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];
console.log(iveMembersArray);

/**
 * index
 * 
 * 0부터 시작한다.
 * 1씩 올라갑니다.
 */

console.log(iveMembersArray[5]);
iveMembersArray[0] = '코드팩토리';
console.log(iveMembersArray);