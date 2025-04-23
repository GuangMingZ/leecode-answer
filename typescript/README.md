# TS 类型体操前置知识储备


## extends
- 在 TS 充当了 if 和 在 XXX 范围内 的一个作用。extends 后面通常就要接三目运算符了
```ts
type mytype1 = 1 extends string ? true : false // false
type mytype2 = '1' extends string ? true : false // true
type mytype2_1 = string extends '1' ? true : false // false
type mytype3 = mytype1 extends any ? 1 : 2 // 1
type mytype4 = [90] extends unknown[] ? true : false // true
type mytype5 = [90] extends string[] ? true : false // false
```

extends 总结
• extends 在 TS 的函数体中的时候起到的是判断范畴的一个作用
• 在一些特殊位置 （比如接收泛型的时候，在函数运算过程中断言变量类型的时候）起到的是一个 约束类型 的作用

## keyof 和 in
```ts
Pick<T, K extends keyof T> = {
    [P in K]: T[P];
}
```

keyof 的作用可以理解为 把一个对象中的所有 键 提取出来。
```ts
interface Todo {  
  title: string;
  description: string;
  completed: boolean;
}

type TodoKeys = keyof Todo
//type TodoKeys =  'title' | 'description' | 'completed'
```

`K extends keyof Todo` 意思也就是说，K 参数的取值范围只能在 Todo 的键中取`('title' | 'description' | 'completed')`，限制为字符串，并且是这 3 个键中的其中一个/多个，只能少，不能多

`P in k` 可以理解为 循环

### keyof 和 in 小结
• `keyof` 是为了拿到一个对象中的所有的键名，当键名是一个类型的时候，则会全部被升级为对应的 类型
• `in` 则是为了循环 unio 联合类型数据的，多数都用于循环重新生成一个对象

## typeof 关键字
`typeof` 作为从 `js` 世界转换为 `ts` 世界的内容。

```ts
const statusMap = {  
    200: '操作成功',  
    404: '内容找不到',  
    500: '操作失败',  
    10001: '登录失效'
}
type MyStatusMap = typeof statusMap
// 这时候 MyStatus 的值会变成
// type MyStatus = {
//     200: string;
//     404: string;
//     500: string;
//     10001: string;
//  }
//  然后接上keyof关键字，提取对象的键名type MyStatus = keyof MyStatusMap
//  type MyStatus = 200 | 404 | 500 | 10001
//  上面的2步可以简写一步到位type MyStatus2 = keyof typeof statusMap
//  type MyStatus2 = 200 | 404 | 500 | 10001
```

### typeof 小结
typeof 是一个可以动态把 JS 的对象转换为 TS 的关键字。
不过也有限制场景，那就是转换的前提是这部分 JS 是已固定的内容。就好比例子中的一个对象映射，那是固定的内容，然后让 TS 去推导
而且打包后的代码是不可能存在 TS 的，如果想实现后端接口动态返回内容在用 typeof ，这是实现不了的.

## readonly 关键字
将 属性 声明为只读

## 基础操作符

### 非空断言操作符（!）
`cb!()`，断言cb一定不为null或undefined

### 可选链操作符（?）

### 空值合并运算符（??）

### 可选属性（?:）

### 与运算符（&）

### 或（联合）运算符（|）


## 推断类型 infer
简单一句话概括 `infer` 只是一个 占位 的工具，我就站在这个位置，至于这个位置是什么内容 `infer` 并不关心，可以留给后面的程序去判断

```ts
type First<T extends any[]> = T extends [infer F,...infer Rest] ? F : never
```
简单的说一下
• infer 必须在 TS 函数运算过程中使用（在定义泛型的<>中不能使用，而 extends 就可以）
• infer 可以配合 ... 进行运算
• T extends [infer F,...infer Rest]
• 表达的意思就是 T extends [F,...Rest 剩余的值]。T 肯定是存在一个属性F的数组，...Rest 是剩下的内容，可有可无
• ...infer Rest 就是把除了 F 之外的元素在归集为一个数组（这个是 ES6 的知识了）
• infer F 的意思就是，我拿 F 在这个数组里面 占位 ,数组的第一项的内容，就是被 F 占了
• 回归到题目，我们要拿的也正是第一项，所以直接 return F 类型
• 如果 T 是一个空数组，那么 extends 那一步就都判断不通过，自然返回的就是 never，符合测试用例的要求。

### infer 还能遍历字符串
比如起一个 字符串切割为数组的需求：
```ts
type testInfer<T extends string> = T extends `${infer F}${infer S}${infer R}` ? [F, S, R] : Ttype testInfer1 = testInfer<'123456'>
// 按照占位符的特性，前面F和S分别占据2个字符，剩余的都给R占去了
// type testInfer1 = ["1", "2", "3456"]
// 稍作改动，在S占位符后面添加一个5
// type testInfer2<T extends string> = T extends `${infer F}${infer S}5${infer R}` ? [F, S, R] : T
// type testInfer3 = testInfer<'123456'>
//  F 占第一个字符 = 1
//  S 占据2-4，因为在R之前有一个5，所以S代表了第二个字符开始到5的所有字符
//  那么R就是从5开始，到末尾，所以得出的结果如下：
//  type testInfer1 = ["1", "234", "6"]
```

### infer 小结
infer 相当于一个占位置的关键字，把占下来的位置复制给对应的运算变量。
其中对于数组或者其他的类型来说，还能用 ... 把所有的位置归结起来形成一个数组
对于字符串这种不存在 ... 拓展运算符的来说，只要前面占了一个位置，剩下的字符就会被第二个占位符全部代替
