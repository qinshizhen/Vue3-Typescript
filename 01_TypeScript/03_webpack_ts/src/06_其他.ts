
/**
 * 其他
 */

/**
 * 声明文件
 *  当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能
 *  把声明语句放到一个单独的文件（jQuery.d.ts）中, ts会自动解析到项目中所有声明文件
 *  npm install @types/jquery --save-dev
 *  /node_modules/@types/jquery
 * 
 * 声明语句
 *  如果需要ts对新的语法进行检查, 需要要加载了对应的类型说明代码
 *  declare var jQuery: (selector: string) => any;
 * 
 * 很多的第三方库都定义了对应的声明文件库, 库文件名一般为 @types/xxx, 可以在 https://www.npmjs.com/package/package 进行搜索
 */

// import jQuery from 'jquery';
// jQuery('#foo');
// ERROR: Cannot find name 'jQuery'.


/**
 * 内置对象
 *  JavaScript 中有很多内置对象，它们可以直接在 TypeScript 中当做定义好了的类型。
 *  内置对象是指根据标准在全局作用域（Global）上存在的对象。这里的标准是指 ECMAScript 和其他环境（比如 DOM）的标准。
 */

/* 1. ECMAScript 的内置对象 */
let b: Boolean = new Boolean(1)
let n: Number = new Number(true)
let s: String = new String('abc')
let d: Date = new Date()
let r: RegExp = /^1/
let e: Error = new Error('error message')
b = true
// let bb: boolean = new Boolean(2)  // error 不能将类型“Boolean”分配给类型“boolean”。


/* 2. BOM 和 DOM 的内置对象 */
/**
 * Window
 * Document
 * HTMLElement
 * DocumentFragment
 * Event
 * NodeList
 */
const div: HTMLElement = document.getElementById('test')
const divs: NodeList = document.querySelectorAll('div')
document.addEventListener('click', (event: MouseEvent) => {
    console.dir(event.target)
})
const fragment: DocumentFragment = document.createDocumentFragment()
