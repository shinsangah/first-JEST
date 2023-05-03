// toThrow
// 백엔드를 짜다보면 당연히 예상치 못한 에러가 발생하거나,
// 예상된 에러를 발생시키는 경우가 생김. 이러한 경우에도 테스트 (toThorw)가 필요!

// const throwErr = (): never => {
//   throw new Error("에러 발생!");
// };

// test("에러가 발생하는지 테스트", () => {
//   expect(throwErr()).toThrow();
// });
// 에러가 실제로 발생하니까 문제가 되는 것임.
// 에러 발생! 문구 띄워짐.

//------------------------------------------------------------------------------

// useState랑 똑같다고 생각하면 됨. 익명함수로 감싸줘야 함.

const throwErr = (): never => {
  throw new Error("에러 발생!");
};

test("에러가 발생하는지 테스트", () => {
  expect(() => throwErr()).toThrow();
});

// 잘 출력이 됨.

//------------------------------------------------------------------------------
