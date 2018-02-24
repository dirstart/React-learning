#### setState
* 不会马上修改state：把对象放进一个更新队列。有多个`setState`会集中起来最后一起渲染。
```
    this.setState({
      count: 0
    }, () => {
      console.log(this.state.count);
    });
    this.setState((preState) => {
      return { count: preState.count + 1 }
    });
    // 最后输出 1
```
##### 执行顺序:  setState1 -> setState2 -> console

* 非顺序执行。异步需要用函数。
```
this.setState({
  isLiked: !this.state.isLiked
});
console.log(this.state.isLiked); // false
```
##### 执行顺序 console -> setState。(原 isLiked: false)
>   没有先执行`setState`.解决方案：
```
this.setState({
  isLiked: !this.state.isLiked
}, () => {
  console.log(this.state.isLiked)  // true
});
```

* * *

#### props 不可变。

#### 组件的挂载和卸载，如果组件本身有定时器。我们在卸载的时候需要记得要把它们清除。
> 因为JS的闭包特性，可能会导致严重的内存泄露
所以：
记得在 `componentWillUnmount() {clearInterva(timer)}`