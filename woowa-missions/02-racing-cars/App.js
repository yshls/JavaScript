/**
class App {
  async run() {
    // 1. 사용자한테 차 이름 입력받기
    // 2. 쉼표로 쪼개서 배열로 만들기
    // 3. 차 이름마다 { 이름, 위치: 0 } 인 객체로 변환하기 (여기서 5글자 체크도 해야 함)
    
    // 4. 시도할 횟수 입력받기 (숫자로 바꾸기)
    
    // 5. 횟수만큼 반복하기 (Game Loop)
        // 5-1. 모든 차를 한 번씩 돌면서 주사위 굴리기
        // 5-2. 4 이상이면 전진시키기
        // 5-3. 현재 상태 출력하기 (별 찍기)
    
    // 6. 제일 멀리 간 거리 구하기
    // 7. 그 거리만큼 간 차들 이름만 뽑기
    // 8. 우승자 출력하기
  }
}
*/

import { MissionUtils } from '@woowacourse/mission-utils';
class App {
  async run() {
    try {
      // 1. 사용자한테 차 이름 입력받기
      const carName = await MissionUtils.Console.readLineAsync(
        '레이싱할 자동차 이름을 입력해주세요.'
      );
      // 2. 쉼표로 쪼개서 배열로 만들기
      const carNameSplit = carName.split(',');
      // 3. 차 이름마다 { 이름, 위치: 0 } 인 객체로 변환하기
      const cars = carNameSplit.map((name) => {
        if (name.length > 5) {
          throw new Error('[ERROR]');
        }
        return { name: name, position: 0 };
      });
      // 4. 시도할 횟수 입력받기 (숫자로 바꾸기)
      let input = await MissionUtils.Console.readLineAsync(
        '시도할 횟수를 입력해주세요.'
      );

      let numInput = Number(input);

      // 횟수 만큼 반복하기
      for (let i = 0; i < numInput; i++) {
        cars.forEach((car) => {
          const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);

          if (randomNum >= 4) {
            car.position += 1;
          }

          MissionUtils.Console.print(
            `${car.name} : ${'-'.repeat(car.position)}`
          );
        });

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
