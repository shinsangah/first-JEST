// toBe와 toEqual 문제가 생기는 것 해보기.
// : '객체 비교'할 때는 toEqual 써야 함.

// const makeObj = (id, name) => {
//   return { id, name };
// };

// test("toBe의 문제점 파악하기", () => {
//   expect(makeObj("sangah", "신상아")).toBe({ id: "sangah", name: "신상아" });
// });

//If it should pass with deep equality, replace "toBe" with "toStrictEqual"
// 같은 Equal 인데 더 빡센 StrictEqual 확인하라고 에러 메시지 뜸.
// npm test toEqual 해서 이 파일만 실행하기
// 실패 뜸.

// test("toBe의 문제점 파악하기", () => {
//   expect(makeObj("sangah", "신상아")).toEqual({ id: "sangah", name: "신상아" });
// });

// 비교 잘 이루어짐.
// 객체값처럼 비원시 데이터 비교할 때는 진정한 의미의 비교 (toEqual) 해야함.

// test("toBe의 문제점 파악하기", () => {
//   expect(makeObj("sangah", "신상아")).toEqual({
//     idd: "sangah",
//     name: "신상아",
//   });
// });

// ------------------------------------------------------------------------------

// const makeObj = (id, name) => {
//   return { id, name, age: undefined };
// };

// test("toBe의 문제점 파악하기", () => {
//   expect(makeObj("sangah", "신상아")).toEqual({
//     id: "sangah",
//     name: "신상아",
//   });
// });

// age 라는 undefined 값이 배정된 key는 존재하지 않는다고 자바스크립트가 판단. 에러 안뜸.
// undefined 가 아닌 값인 null로 변경하면 에러. // 이런 것까지 다 잡으려면 toStrictEqual 써야함.

// ------------------------------------------------------------------------------

// test("toBe의 문제점 파악하기", () => {
//   expect(makeObj("sangah", "신상아")).toStrictEqual({
//     id: "sangah",
//     name: "신상아",
//   });
// });

// toStrictEqual 쓰니까 age : undefined 배정해도 그냥 패스하지 않고 에러 뜸.
// ❓그럼 toStrictEqual 로만 쓰면 되는 것이 아닌가?

// ------------------------------------------------------------------------------
