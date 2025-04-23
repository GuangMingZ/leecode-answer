/**
 * Make all properties in T readonly
 * 将所有属性定义为只读
 */
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};
