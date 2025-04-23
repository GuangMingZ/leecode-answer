/**
 * Construct a type with a set of properties K of type T
 * 以 typeof 格式快速创建一个类型，此类型包含一组指定的属性且都是必填。
 */
type MyRecord<K extends keyof any, T> = {
  [P in K]: T;
};

type MyPartial1<T> = {
  [key in keyof T]?: T[key];
};

type MyPartialDeep<T> = {
  [key in keyof T]?: MyPartialDeep<T[key]>;
};

type MyReadonly1<T> = {
  readonly [Key in keyof T]: T[Key];
};

type MyRecord1<T extends keyof any, P> = {
  [Key in T]: P;
};

type MyPick2<T, K extends keyof T> = {
  [Key in K]: T[K];
};
