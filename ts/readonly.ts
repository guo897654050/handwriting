interface TodoA {
  title: string
  description: string
}

// type MyReadonly<T> = {
//   readonly [P in keyof T]: T[P]
// }
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

const todos: MyReadonly<TodoA> = {
  title: "Hey",
  description: "foobar"
}

// todo.title = "Hello" // Error: cannot reassign a readonly property
// todo.description = "barFoo" // Error: cannot reassign a readonly property