#### `!!{username: "", content: ""}` 返回 `true`，应该单独判断。

#### `value={this.state.xx.trim()}`,虽然react有，但是我们不应该屏蔽空格的输入，所以还是自己写比较好，用户名可以屏蔽，但评论不应该屏蔽

#### 组件内容编写顺序
* static 开头的类属性 `defaultProps`,`propTypes`
* constructor
* getter/setter
* 生命周期
* _私有方法
* 事件监听方法
* render*开头的方法
* render()

#### localStorage 只接受字符串

#### Math.max
```
    const duration = (+Date.now() - comment.createdTime) / 1000
    this.setState({
      timeString: duration > 60 ?
      `${Math.round(duration / 60)}分钟前`
      :
      `${Math.round(Math.max(duration, 1))}秒前`
```

####   `color: transparent;` 这句话的作用和其他的差别？默认是什么？

#### 为什么const定义的数组，可以使用splice进行裁切？
> https://www.zhihu.com/question/66007508/answer/237227203