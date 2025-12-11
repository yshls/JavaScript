import { MissionUtils } from '@woowacourse/mission-utils';

const InputView = {
  // 1. 자동차 이름 입력받기
  async readCarNames() {
    const input = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    return input.split(',');
  },

  // 2. 시도 횟수 입력받기
  async readTryCount() {
    const input = await MissionUtils.Console.readLineAsync(
      '시도할 횟수를 입력해주세요.\n'
    );
    return Number(input);
  },
};

export default InputView;
