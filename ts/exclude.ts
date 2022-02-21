// Implement the built-in Exclude<T, U>

// Exclude from T those types that are assignable to U

// 对于泛型，每一项会单独拆开进行判断，然后在进行联合

//demo
type P<T> = T extends 'x' ? string : number;
type A3 = P<'x' | 'y'>  // A3的类型是 string | number

// type A = `Exclude<'key1' | 'key2', 'key2'>`

// 等价于

// type A = `Exclude<'key1', 'key2'>` | `Exclude<'key2', 'key2'>`

// =>

// type A = ('key1' extends 'key2' ? never : 'key1') | ('key'2 extends 'key2' ? never : 'key2')

// =>

// never是所有类型的子类型
// type A = 'key1' | never = 'key1'


type MyExclude<T, U> = T extends U ? never : T


type N = MyExclude<1 | 2, 2 | 3>