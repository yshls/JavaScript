import { MissionUtils } from '@woowacourse/mission-utils';
import Car from './Car.js';

class App {
  async run() {
    // 1. 자동차 이름 입력
    const input = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    const names = input.split(',');
    const cars = names.map((name) => new Car(name));

    // 2. 시도 횟수 입력
    const tryCountInput = await MissionUtils.Console.readLineAsync(
      '시도할 횟수를 입력해주세요.\n'
    );
    const tryCount = Number(tryCountInput);

    MissionUtils.Console.print('\n실행 결과');

    // 3. 게임 루프 (횟수만큼 반복)
    for (let i = 0; i < tryCount; i++) {
      cars.forEach((car) => {
        const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
        car.move(randomNum);
        MissionUtils.Console.print(
          `${car.getName()} : ${'-'.repeat(car.getPosition())}`
        );
      });

      // 라운드 종료 시 줄바꿈 (루프 안에서 함)
      MissionUtils.Console.print('');
    }

    // 4. 우승자 결정 (반복문 밖에서!)
    const positions = cars.map((car) => car.getPosition());
    const maxPosition = Math.max(...positions);

    const winners = cars
      .filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.getName());

    MissionUtils.Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default App;
