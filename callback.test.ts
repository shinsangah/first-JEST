// 비동기 테스트도 당연히 가능함.
// Callback / Promise / Async-Awiat 전부 테스트 가능.

// 코드가 복잡하긴 하지만, 타입스크립트 연습하기에 좋을 것임.
// Callback 테스트
// setTimeout을 사용하여 2초 있다가 특정 이름을 리턴하는 함수를 테스트하는 케이스 만들어보기

// 타입스크립트가 코드 가독성은 떨어짐. 장단점이 있음.
// const getNameCB = (callback: (str: string) => void): void => {
//   // 리턴 값은 없고, 인자값으로 값을 전달한다는 뜻.
//   //   const getNameCB = (callback) => 사실상 이 코드인데 타입스크립트로 해줌.
//   //   처음에는 받아들이다가 하나하나 이해하는게 좋을 것!
//   const name: string = "Sangah";
//   setTimeout(() => {
//     callback(name);
//   }, 2000);
// };

// getUserInfo(
//   cb((name) => {
//     console.log(name);
//   }));
// 이것과 비슷한 개념

// test("2초 뒤에 이름을 받아오는 callBack 함수 테스트", () => {
//   getNameCB(callback); // 호이스팅 지원함

//   function callback(name: string): void {
//     expect(name).toBe("신상아");
//   }
// });

// √ 2초 뒤에 이름을 받아오는 callBack 함수 테스트 (1 ms)
// 1ms로 2초를 정확하게 찍히지 않았다.

// "신상아" 한글 이름으로 했는데 패스된 척 하다가
// 2초 뒤에 에러가 뜸.

// ----------------------------------------------------------------

// 콜백 내부에서 기다리도록 처리해주는 함수 처리. done.
// 콜백을 기다렸다가 정확하게 처리해줌.

// test("2초 뒤에 이름을 받아오는 callBack 함수 테스트", (done) => {
//   function callback(name: string): void {
//     expect(name).toBe("Sangah");
//     done();
//   }

//   getNameCB(callback);
// });

// ----------------------------------------------------------------

// 오늘 준비해온 것중에 타입스크립트적으로 가장 빡센 코드 👇🏻
// 골치가 아프고, 정신이 없겠지만, 타입스크립트 공부한다는 의미에서 해보기.

const getNameCB = (callback: (str: string) => void): void => {
  const name: string = "Sangah";
  setTimeout(() => {
    // 2분의 1 확률로 에러를 발생시켜서 에러가 발생하면
    // callback 함수에 담아서 전달하는 코드
    try {
      if (Math.floor(Math.random() * 2) % 2 === 0) {
        // 확률로 에러를 발생시켜야 되니까 이상하게 짠 코드라, 무시해도 되는 코드임.
        console.log("정상 케이스");
        callback(name);
      } else {
        console.log("에러 케이스");
        throw new Error("에러");
      }
    } catch (error) {
      callback(error);
    }
    // 콜백의 인자로써 에러를 전달, 죽지 않고 에러를 던지려면 try catch문으로 감싸줘야 함.
  }, 2000);
};

// 거의 자바스크립트에서 try catch 어떻게 쓰는지 보는 용도임.
// 그리고 JEST로 확인하는 것임.

test("2초 뒤에 이름을 받아오는 callBack 함수 테스트", (done) => {
  // data로 '에러'가 들어올지, '데이터'가 들어올지 모르므로 any 타입 설정
  function callback(data: any): void {
    try {
      if (data instanceof Error) {
        // ↑ 데이터가 Error 라는 형태를 가졌는지 확인
        expect(data.message).toBe("에러");
      } else {
        expect(data).toBe("Sangah");
      }
      done();
    } catch (error) {
      done(error);
    }
  }
  getNameCB(callback);
});

// 에러 케이스 / 정상 케이스 번갈아 막 뜬다.
// 기다렸다가 값이 잘 들어오는 정도로 done 잘 기억하면 된다.
