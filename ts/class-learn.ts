// 在TypeScript里，成员都默认为 public。
// 当成员被标记成 private时，它就不能在声明它的类的外部访问
// 总结不同
/**
 * 1. 不标记代表所有都是public
 * 2. private，只允许在基类中被访问，无法被继承的类访问
 * 3. protect，无法在基类外使用，但是可以被继承的类访问。构造函数的protect无法被实例化，即不可以new，但是可以被继承。
 */
class Animal {
  private name: string;
  public constructor(reName: string) {
    this.name = reName;
  }

  public move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}`)
  }
}

class Dog extends Animal {
  constructor(name: string) {
    // super执行基类的构造函数
    super(name)
  }
  move(distanceInMeters = 5) {
    console.log('dog move');
    super.move(distanceInMeters)
  }
}

class Horse extends Animal {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}


let dog = new Dog('ddddddog');
let horse = new Horse('hhhhhhorse');
dog.move();
horse.move();

//console.log(dog.name)


class Animal2 {
  protected name: string;
  constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal2 {
  constructor() { super("Rhino"); }
  say() {
    console.log(`111${this.name}`)
  }
}

let animal = new Animal("Goat");
let rhino = new Rhino();