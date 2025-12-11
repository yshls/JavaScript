import { MissionUtils } from '@woowacourse/mission-utils';
import Car from './Car.js';
import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';

class App {
  async run() {
    // 1. 자동차 이름 입력
    const names = await InputView.readCarNames();
    const cars = names.map((name) => new Car(name));

    // 2. 시도 횟수 입력
    const tryCount = await InputView.readTryCount();

    OutputView.printResult();

    // 3. 게임 루프 (횟수만큼 반복)
    for (let i = 0; i < tryCount; i++) {
      cars.forEach((car) => {
        const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
        car.move(randomNum);
        OutputView.printResultCar(car);
      });

      // 라운드 종료 시 줄바꿈 (루프 안에서 함)
      OutputView.printEmptyLine();
    }

    // 4. 우승자 결정 (반복문 밖에서!)
    const positions = cars.map((car) => car.getPosition());
    const maxPosition = Math.max(...positions);

    const winners = cars
      .filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.getName());

    OutputView.printWinner(winners);
  }
}

export default App;
