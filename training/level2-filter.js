/*
[문제 2] 유효한 숫자만 필터링하기
1. data 배열에 ["10", "20", "error", "30", "40"] 이 들어있습니다.
2. 빈 배열 cleanData를 만드세요.
3. for문을 돌면서 data의 요소를 하나씩 숫자로 변환하세요 (Number 사용).
4. 만약 변환한 결과가 NaN이라면?
   -> "에러 데이터 발생!"을 출력하고, cleanData에 넣지 말고 다음 루프로 건너뛰세요 (continue 사용).
5. 정상 숫자라면 cleanData에 넣으세요 (push 사용).
6. 결과: cleanData를 출력하세요.
*/

function filterNumbers(data) {
  let cleanData = [];
  for (let i = 0; i < data.length; i++) {
    const num = Number(data[i]);
    if (Number.isNaN(num)) {
      console.log('에러 데이터 발생!');
      continue;
    } else {
      cleanData.push(num);
    }
  }
  return cleanData;
}
console.log(filterNumbers(['10', '20', 'error', '30', '40']));
