type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false


type Includes<T extends readonly unknown[], U> =
  T extends [infer Fisrt, ...infer Rest]
  ? Equal<Fisrt, U> extends true
  ? true
  : Includes<Rest, U>
  : false;


type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Wamuu'> // expected to be `false`

