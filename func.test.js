const sum = require("./func");

// test("1 더하기 2를 return 하는 함수 sum은 잘 작동하는가?", () => {
//   expect(sum(1, 2)).toBe(3);
// });

// test("1 더하기 2를 return 하는 함수 sum은 잘 작동하는가?", () => {
//   expect(sum(1, 2)).toBe("3");
// });

// 이런 함수는 딱히 테스트 해볼 일이 없음.

// test("변수의 얕은 비교는 테스트가 되나요?", () => {
//   const str = "테스트";
//   expect(str).toBe("테스트");
// expect(꼭 함수가 아니여도 됨. 검증하고싶은 대상).toBe(얕은 비교)
// });

// test("변수의 얕은 비교는 테스트가 되나요?", () => {
//   const str = "테스트";
//   expect(str + " 가능?").toBe("테스트 가능?");
// 띄어쓰기도 잡아줌
// });

// -------------------------------------------------------

test("변수의 얕은 비교는 테스트가 되나요?", () => {
  const str = "테스트";
  expect(str + " 가능?").toEqual("테스트 가능?");
});

test("변수의 얕은 비교는 테스트가 되나요?", () => {
  const str = "테스트";
  expect(str + " 가능?").toStrictEqual("테스트 가능?");
});

// == 은 자료의 값만 비교, 자료의 값을 비교한다는 의미가 자바스크립트에서는 값 비교에서는 맘대로 지들이 변경함.
// == 은 숫자 1과 문자 1이 같다. 라고 비교함.
// toBe 는 얕은 비교.

// === 은 자료형까지도 비교, 숫자 1과 문자 1은 자료형이 다르니까 false 뜸.
// toEqual 은 깊은 비교. 이왕이면 toEqual 쓰는게 나음.
