// 비동기 테스트도 당연히 가능함.
// Callback / Promise / Async-Awiat 전부 테스트 가능.

// Async / Await 테스트용 케이스 만들기

const getNameAsync = (id: string): Promise<string> => {
  const name = "신상아";
  return new Promise<string>((res, rej) => {
    setTimeout(() => {
      if (id === "Sangah") {
        console.log("정상 케이스");
        res(name); // '신상아' 를 받아오는 것.
      } else {
        rej(new Error("id가 다릅니다!"));
      }
    }, 2000);
  });
};

test("2초 후에 이름을 받아오는 async/await 함수 테스트", async () => {
  try {
    const result: any = await getNameAsync("Sanga"); // 에러가 뜨지만, 패스로 잘 출력이 됨. 에러를 띄우게 했으니까>
    expect(result).toBe("신상아");
    // result에 한글 이름 '신상아'가 들어가기를 기대한다.
  } catch (err) {
    expect(err.message).toBe("id가 다릅니다!");
  }
});

// 프론트엔드 테스트는 훨씬 쉬울거임.
// 고생시키고 있는거임.
// 자바스크립트 실력이 높아지길 바라면서 하심.
