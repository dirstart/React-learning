const a = (x) => {
	1
};
const b = (x) => ({
	1: 1
})
console.log(a(2)); //返回undefined,说明这样写没有返回值
//若是直接小括号包起则报错
console.log(b(2)); //返回 1: 1