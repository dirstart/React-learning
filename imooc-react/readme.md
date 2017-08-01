# 已完成
1.搭建好基本的框架


# 疑问
1.防止css冲突的办法
```
 test: /\.css$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
```
# 明白

1.在class内只能定义函数，变量无法直接定义，可以写在render里面
2.注意 this.state.miniHeader 可以加小括号也可以不加， 但就是不能加大括号，因为他们本来就是在大括号里面的，没有必要再次声明他们是变量，也不符合语法规则
```
            style={{
                backgroundColor: (this.state.miniHeader) ? "#fbe12f" : "#2fff01",
            }}
```
3.强制全局css和强制区域css
```
:local(.xxfooter){
	width: 300px;
	height: 100px;
	background: #fee232;
}
```
```
import React from 'react';
let footerCss=require("./Footer.css");
export default class Footer extends React.Component{
	render(){
		return (<footer className={footerCss.xxfooter}>123</footer>)
	}
}
```

