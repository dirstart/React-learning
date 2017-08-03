##### 采用create-react-app搭建的项目。
##### 主要用来学习antd的使用。
##### 用到的其他框架有：


###  遇见的问题

#### 1.因为打算在WillMount里面采用异步加载速度，自以为很优雅，百度一下就发现自己错了
> http://www.codes51.com/itwd/3103879.html
https://segmentfault.com/q/1010000007914607
官方建议把ajax写在componentDidMount中

#### 2.在异步中出现了问题，因为之前的项目用的是react+redux+react-redux，这次没有用react-redux，结果数据改变了但是没有进行render.
```
this.unsubscribe = store.subscribe(() => {
    this.forceUpdate();
}); 
```
需要加上这么一句话才能达到=> 数据改变 => render
