/**
 * From T, pick a set of properties whose keys are in the union K
 * 从类型定义的属性中，选取指定一组属性，返回一个新的类型定义。
 */
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
};