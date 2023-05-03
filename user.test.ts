// 간단한 테스트 케이스 (P.50)

interface User {
  email: string;
  name: string;
  age: number;
}

// const user: Array<User> // 이런식으로 써도 됨. 편한 방식으로 사용 가능.
// ▼ 강사님은 밑 방식처럼 쓰는게 더 편하심.

const users: User[] = [
  { email: "tetz@kdt.com", name: "이효석", age: 39 },
  { email: "jke@kdt.com", name: "장경은", age: 27 },
  { email: "kmj@kdt.com", name: "김민정", age: 25 },
  { email: "psj@kdt.com", name: "박성재", age: 20 },
];

// TypeScript 연습할 겸,

// ● 전체 회원의 리스트를 반환하는 함수
// const getAllUsers = (): User[] => {
//   return users;
// };
//
// ● 특정 회원 중, 특정 나이 이상의 회원의 수를 구하는 함수
const getCountsOverAge = (age: number): number => {
  //   const resultArr: User[] | [] = users.filter((el: User) => el.age >= age);
  const resultArr: User[] = users.filter((el: User) => el.age >= age); // 이걸로 진행함!
  //   const resultArr: User[] = users.filter((el: User) => {
  // return el.age >= age;
  //   });
  //   {return el.age >= age} return 과 {}가 생략된 것임. 자바스크립트 코드가 복잡해서 생략한 것.
  // 못찾는 케이스가 있을 수 있어서 유니온 배열 썼는데,
  // 빈 배열 써도 됨.
  return resultArr?.length;
};

// ● 특정 회원 중, 특정 이름을 가지는 회원의 email을 찾아주는 함수
// const getEmailByUser = (name: string): string => {
//   const findUser: User | undefined = users.find(
// 못찾는 케이스는 undefined 리턴되게 한다는 뜻
// (el: User) => el.name.indexOf(name) !== -1
//   );
//   if (findUser) return findUser.email;
//   return "해당 이름을 가진 회원을 찾을 수 없습니다!";
// };

// 굳이 이렇게 짤 필요없는데 백엔드에 있는 컨트롤러처럼 짜보이려고 이렇게 짜고 있는것임.

// 가상의 컨트롤러이자 함수들을 테스트 해보자!
// npm test user.test.ts

// 배열 관련 Matchers (toHaveLength)
// 특정 배열의 길이를 테스트하는 Matchers

// test("전체 회원은 4명인가?", () => {
//   expect(getAllUsers()).toHaveLength(4);
// });

// 배열 관련 Matchers (toContainEqual)
// 특정 배열 값에서 원하는 배열이 존재하는지 확인하는 Matchers

// test("전체 회원 중, testz 라는 회원이 존재 하는가?", () => {
//   expect(getAllUsers()).toContainEqual({
//     email: "tetz@kdt.com",
//     name: "이효석",
//     age: 39,
//   });
// });

// 배열 관련 Matchers
// (toBeGreaterThan / toBeGreaterThanOrEqual)
// (toBeLessThan / toBeLessThanOrEqual)
// 숫자를 비교하는 Matchers

test("25살 이상인 회원은 2명 이상인가?", () => {
  expect(getCountsOverAge(25)).toBeGreaterThanOrEqual(3);
});

// ❓ ▲ 내 생각이랑 계속 다르게 나옴. (이상,이하) 다시 해봐야 할듯.

// ----------------------------------------------------------------------------

// toMatch 정규식
// /^ 꺽쇠의 의미는 저걸로 반드시 시작을 해야 한다.
// 영어로 소문자, 숫자값, 하이픈까지는 포함이 가능하다.
// 다음 문자 시작점은 @ 로 시작해야 하고 등등 $ 저 조건으로 끝나야 한다라는 이런 의미.

// test("특정 이름을 가진 회원의 email은 양식을 따르는가?", () => {
//   expect(getEmailByUser("김민정")).toMatch(
// /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/ // 정규식
// 문자열 및 숫자가 포함된 @ 문자열 및 숫자가 포함된 쩜
// 정규식을 이용해서 테스트 하는 방법도 가능하다.
// 정규식은 리액트 테스트에서도 꾸준히 쓰인다.
//   );
// });

// ----------------------------------------------------------------------------
