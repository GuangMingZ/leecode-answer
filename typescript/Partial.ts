/**
 * Make all properties in T optional
 * 将类型定义的所有属性都修改为可选
 */
type MyPartial<T> = {
  [P in keyof T]?: T[P];
};
