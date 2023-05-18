// 버튼0을 누르면
// 버튼?에 있는 orange 클래스 제거
// 버튼0에 orange클래스 추가
// 모든 div에 show 클래스 제거
// div0에 show 클래스 추가
for (let i = 0; i < 3; i++) {
  $(".tab-button")
    .eq(i)
    .on("click", function () {
      탭열기(i);
    });
}

function 탭열기(숫자) {
  $(".tab-button").removeClass("orange");
  $(".tab-button").eq(숫자).addClass("orange");
  $(".tab-content").removeClass("show");
  $(".tab-content").eq(숫자).addClass("show");
}
