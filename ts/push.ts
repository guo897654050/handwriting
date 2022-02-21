type Push<T extends any[], U> = [...T, U]

type Result123 = Push<[1, 2], '3'> // [1, 2, '3']