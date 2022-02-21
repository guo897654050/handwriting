interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyOmit<T, U> = {
  [P in Exclude<keyof T, U>]: T[P]
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}