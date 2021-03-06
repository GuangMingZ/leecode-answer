/*
* 手写 new
* 1.创建一个空对象
* 2.链接到原型
* 3.绑定this值
* 4.返回新对象
*/
// 第一种实现
function createNew() {
    let obj = {}  // 1.创建一个空对象
    let [constructor,...args] = [...arguments]  
    obj.__proto__ = constructor.prototype  // 2.链接到原型
    let result = constructor.apply(obj, args)   // 3.绑定this值
    return typeof result === 'object' ? result : obj  // 4.返回新对象
}

// 第二种实现
function createNew(...args) {
    let obj = {}  // 1.创建一个空对象
    let [constructor,...restArgs] = [...args]  
    obj.__proto__ = constructor.prototype  // 2.链接到原型
    let result = constructor.apply(obj, restArgs)   // 3.绑定this值
    return typeof result === 'object' ? result : obj  // 4.返回新对象
}

function People(name,age) {
    this.name = name
    this.age = age
}

let peo = createNew(People,'Bob',22)
console.log(peo.name)
console.log(peo.age)

