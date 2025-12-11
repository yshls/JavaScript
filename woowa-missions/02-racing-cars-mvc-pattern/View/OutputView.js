import { MissionUtils } from '@woowacourse/mission-utils';

const OutputView = {
  printResult() {
    MissionUtils.Console.print('\n실행 결과');
  },
  printResultCar(car) {
    MissionUtils.Console.print(
      `${car.getName()} : ${'-'.repeat(car.getPosition())}`
    );
  },
  printEmptyLine() {
    MissionUtils.Console.print('');
  },
  printWinner(winners) {
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(', ')}`);
  },
};

export default OutputView;
