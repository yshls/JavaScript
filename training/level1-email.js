/*
[문제 1] 이메일 주소 분리하기
1. email 변수에 "alex_developer@javascript.com"을 넣으세요.
2. '@' 문자가 몇 번째 인덱스에 있는지 찾으세요 (indexOf 사용).
3. substring을 사용하여 '@' 앞부분을 id 변수에, 뒷부분을 domain 변수에 담으세요.
4. 결과: id와 domain을 각각 출력하세요.
*/

// 여기에 코드를 작성하세요

function splitEmail(email) {
  const findIndex = email.indexOf('@');
  const id = email.substring(0, findIndex);
  const domain = email.substring(findIndex + 1);

  return [id, domain];
}

console.log(splitEmail('alex_developer@woowacourse.com'));
