// 비동기 테스트도 당연히 가능함.
// Callback / Promise / Async-Awiat 전부 테스트 가능.

// Jest라기 보다는 타입스크립트 공부에 가깝다는 생각을 하고 계심.
// 지금까지 한 수업중에 가장 자바스크립트적인 수업을 하고 있다는 생각.

// Promise 테스트용 케이스 만들기
// setTimeout을 사용하여 2초 있다가 특정 이름을 Promise로 리턴하는 함수를 테스트하는 케이스 만들기
// const getNamePromise = (): Promise<string> => {
//   const name = "Sangah";
//   return new Promise<string>((resolve, reject) => {
//     setTimeout(() => {
//       resolve(name);
//     }, 2000);
//   });
// };

// test("2초 후에 이름을 받아오는 Promise 함수 테스트", () => {
//   return getNamePromise().then((age: string) => {
//     expect(age).toBe("Sangah");
//   });
// });

// return을 넣어줘야만 정상적으로 실행됨.

// ----------------------------------------------------------------

// 에러가 발생했을 때 catch 로 받아주기.

const getNamePromise = (): Promise<string> => {
  const name = "Sangah";
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (Math.floor(Math.random() * 2) % 2 === 0) {
        console.log("정상 케이스");
        resolve(name);
      } else {
        console.log("에러 케이스");
        reject(new Error("에러"));
      }
    }, 2000);
  });
};

test("2초 후에 이름을 받아오는 Promise 함수 테스트", () => {
  return getNamePromise()
    .then((age: string) => {
      expect(age).toBe("Sangah");
    })
    .catch((err) => {
      expect(err.message).toBe("에러");
    });
});

//---------------------------------------------------

// try, catch 대신!
// 간단하게 성공, 에러 상황만 비교하고 싶으면 resolves, rejects 라는 기능을 사용해도 됨.

//---------------------------------------------------
