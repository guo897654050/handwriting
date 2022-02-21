// If we have a type which is wrapped type like Promise.
// How we can get a type which is inside the wrapped type? 
// For example if we have Promise<ExampleType> how to get ExampleType?

type myAwait<T> = T extends Promise<infer R> ? myAwait<R> : T;



// infer
type returnType<T> = T extends (...args: string[]) => infer R ? R : string[];

type func = () => number;
type func2 = () => string[];

type a = returnType<func>
type b = returnType<func2>