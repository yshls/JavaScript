/*
[문제 3] 비밀번호 유효성 검사 함수 만들기
1. validatePassword(password) 라는 함수를 만드세요.
2. 함수 안에서 다음 조건을 검사하세요.
   - 조건 1: 비밀번호 길이가 8글자 미만이면 -> throw new Error("비밀번호는 8자 이상이어야 합니다.");
   - 조건 2: 비밀번호에 "!"가 없으면 (includes 사용) -> throw new Error("특수문자 !를 포함해야 합니다.");
3. 모든 조건을 통과하면 "비밀번호 변경 성공!"을 출력하세요.
4. 함수 밖에서 try-catch 문을 사용하여 이 함수를 실행해보세요.
   - 테스트 케이스 1: validatePassword("1234") -> 에러 메시지 출력
   - 테스트 케이스 2: validatePassword("12345678") -> 에러 메시지 출력
   - 테스트 케이스 3: validatePassword("12345678!") -> 성공 메시지 출력
*/

function validatePassword(password) {
  try {
    if (password.length < 8) {
      throw new Error('비밀번호는 8자 이상이어야 합니다.');
    } else if (!password.includes('!')) {
      throw new Error('특수문자 !를 포함해야 합니다.');
    } else {
      console.log('비밀번호 변경 성공!');
    }
  } catch (error) {
    console.log(error.message);
  }
}
validatePassword('1234');
validatePassword('12345678');
validatePassword('12345678!');

// 리펙토링
function validatePasswordRefactored(password) {
  if (password.length < 8) {
    throw new Error('비밀번호는 8자 이상이어야 합니다.');
  }
  if (!password.includes('!')) {
    throw new Error('특수문자 !를 포함해야 합니다.');
  }
  console.log('비밀번호 변경 성공!');
}
try {
  validatePasswordRefactored('1234');
  validatePasswordRefactored('12345678');
  validatePasswordRefactored('12345678!');
} catch (error) {
  console.log('[에러 발생]', error.message);
}
