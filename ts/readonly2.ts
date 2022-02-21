interface TodoB {
  title: string
  description: string
  completed: boolean
}

type MyReadonly2<T, K extends keyof T> = {
  readonly [P in K]: T[P]
} & Omit<T, K>

const todo3: MyReadonly2<TodoB, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

todo3.title = "Hello" // Error: cannot reassign a readonly property
todo3.description = "barFoo" // Error: cannot reassign a readonly property
todo3.completed = true // OK