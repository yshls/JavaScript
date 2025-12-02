import { MissionUtils } from '@woowacourse/mission-utils';
class App {
  async run() {
    try {
      // 1. 입력 및 검증
      const answer = await MissionUtils.Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
      );
      const carNames = answer.split(',');
      // 2. 자동차 객체 생성
      const cars = carNames.map((name) => {
        if (name.length > 5) {
          throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
        }
        // 각 자동차의 상태(이름, 위치)를 초기화해서 반환
        return { name: name, position: 0 };
      });
      // 2. 시도 횟수 입력
      const input = await MissionUtils.Console.readLineAsync('시도할 횟수:');
      const tryCount = Number(input);
      // 숫자가 이닐 경우 에러처리
      if (isNaN(tryCount)) {
        throw new Error('[ERROR] 숫자를 입력해 주세요.');
      }
      // 3. 게임 시작 메시지
      MissionUtils.Console.print('\n실행 결과');
      // 시도할 횟수
      for (let i = 0; i < tryCount; i++) {
        // 각 턴마다 모든 자동차를 하나씩 검사
        cars.forEach((car) => {
          const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);

          // 4이상일 경우 전진
          if (randomNum >= 4) {
            car.position += 1;
          }

          // 전진 결과 출력(화면 그리기)
          MissionUtils.Console.print(
            `${car.name} : ${'-'.repeat(car.position)}`
          );
        });
        // 줄바꿈
        MissionUtils.Console.print('');
      }

      const maxPosition = Math.max(...cars.map((car) => car.position));

      const winners = cars
        .filter((car) => car.position === maxPosition)
        .map((car) => car.name);

      MissionUtils.Console.print(`최종 우승자 : ${winners.join(', ')}`);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }
}

export default App;
