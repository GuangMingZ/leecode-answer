/**
 * Make all properties in T optional
 * 将类型定义的所有属性都修改为可选
 */
 type Partial<T> = {
    [P in keyof T]?: T[P];
};

/**
 * Make all properties in T readonly
 * 将所有属性定义为自读
 */
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

/**
 * From T, pick a set of properties whose keys are in the union K
 * 从类型定义的属性中，选取指定一组属性，返回一个新的类型定义。
 */
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};

/**
 * Construct a type with a set of properties K of type T
 * 以 typeof 格式快速创建一个类型，此类型包含一组指定的属性且都是必填。
 */
type Record<K extends keyof any, T> = {
    [P in K]: T;
};