interface IAnimal {
  eat: () => void;
  fly?: () => void;
}

class Animals implements IAnimal {
  public eat = () => {
    console.log('come from animal!')
  };
  public move() {
    console.log('i can move !!')
  }
}

class Dogs extends Animals {
  bark() {
    console.log('i can bark as dog!!')
  }
}

const dogdog = new Dogs();
// dogdog.eat();
// dogdog.bark();
// dogdog.move()


class Animal99 {
  public name: string;
  constructor(theName: string) {
    this.name = theName
  }

  public move(distance: number = 0) {
    console.log(`${this.name} has move ${distance}`)
  }
}

class Snake extends Animal99 {
  // 私有变量只能在类的内部访问
  private _age: number;
  constructor(name: string, age: number = 99) {
    super(name);
    this._age = age;
  }

  public move(distance: number = 99) {
    super.move(distance)
  }
}

const snake = new Snake('snake');
snake.move();
