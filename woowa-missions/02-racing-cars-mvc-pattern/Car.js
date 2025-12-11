// src/Car.js

class Car {
  // 1. 여기에 Private Field(#) 두 개를 선언해 (이름, 위치)
  #name;
  #position;

  constructor(name) {
    const cleanedName = name.trim();

    this.#validateName(cleanedName);
    this.#name = cleanedName;
    this.#position = 0;
  }

  move(number) {
    if (number >= 4) {
      this.#position += 1;
    }
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }

  // [내부 로직] 검증 (Private Method)
  #validateName(name) {
    // 8. 이름 유효성 검사 구현
    if (name.length === 0) {
      throw new Error('[ERROR');
    }
    if (name.length > 5) {
      throw new Error('[ERROR]');
    }
  }
}

export default Car;
