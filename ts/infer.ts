type paramsType<T> = T extends (...args: infer P) => any ? P : T;

interface User {
  name: string;
  age: number;
}

type GetAge = (user: User) => void;
const getAge: GetAge = (user) => { };

type A1 = paramsType<GetAge>;
type B1 = paramsType<string>;