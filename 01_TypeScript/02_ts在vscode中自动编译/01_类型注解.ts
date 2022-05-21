// 类型注解： 是一种轻量级的为函数或者变量添加的约束
(() => {
	// str 是string类型的，如果别的或是空的或是多传都会有错误信息提示
	function showMsg(str: string) {
		return `床前明月光，${str}`
	}
	console.log(showMsg('疑是地上霜'));
})()