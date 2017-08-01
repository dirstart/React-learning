var obj1 = {a: {b: 1}};  
var obj2 = Object.assign({}, obj1);  
obj2.a.b = 2;  
console.log(obj1.a.b);

