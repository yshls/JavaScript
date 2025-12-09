import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      // 1. 입력 및 객체 생성
      const carName = await MissionUtils.Console.readLineAsync(
        '레이싱할 자동차 이름을 입력해주세요.\n'
      );
      const carNameSplit = carName.split(',');

      const cars = carNameSplit.map((name) => {
        if (name.length > 5) {
          throw new Error('[ERROR] 이름은 5자 이하만 가능합니다.');
        }
        return { name: name, position: 0 };
      });

      // 2. 횟수 입력
      let input = await MissionUtils.Console.readLineAsync(
        '시도할 횟수를 입력해주세요.\n'
      );
      let numInput = Number(input);

      MissionUtils.Console.print('\n실행 결과');

      // 3. 게임 루프
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

      this.printWinners(cars);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }

  printWinners(cars) {
    const maxPosition = Math.max(...cars.map((car) => car.position));

    const winners = cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);

    MissionUtils.Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default App;
