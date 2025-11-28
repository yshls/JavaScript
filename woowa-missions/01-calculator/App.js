import { MissionUtils } from '@woowacourse/mission-utils';
class App {
  async run() {
    try {
      const answer = await MissionUtils.Console.readLineAsync(
        '덧셈할 문자열을 입력해주세요.'
      );

      let sum = 0;
      let splitNum;

      if (answer == '') {
        return MissionUtils.Console.print(`입력값: 0`);
      }

      if (answer.startsWith('//')) {
        const indexNum = answer.indexOf('\\n');
        const middleNum = answer.substring(2, indexNum);
        const numPart = answer.substring(indexNum + 2);
        splitNum = numPart.split(middleNum);
      } else {
        splitNum = answer.split(/[,:]/);
      }

      for (let i = 0; i < splitNum.length; i++) {
        const num = Number(splitNum[i]);

        if (num < 0) {
          throw new Error('[ERROR] 음수는 입력할 수 없습니다.');
        }

        if (Number.isNaN(sum)) {
          throw new Error('[ERROR] 숫자를 입력해주세요.');
        }
        sum += num;
      }
      MissionUtils.Console.print(`결과 : ${sum}`);
    } catch (error) {
      throw error;
    }
  }
}

export default App;
