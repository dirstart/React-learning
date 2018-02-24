// 1.富文本编辑器
// 需要给 dangerouslySetInnerHTML 传入一个对象
// 这个对象的 __html 属性值相当于元素的 innerHTML
// 2.完成函数 getDefaultStyledPost
// 接受表示样式的对象作参数
// <Post style={{color: 'blue'}}/>  最后显示为 蓝色
// <Post style={{fontSize: '18px'}}/> 最后显示为 红色
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

class Editor extends Component {
  constructor() {
    super();
    this.state = {
      content: '<h1>终于到编辑器了</h1>'
    }
  }
  render() {
    return <div dangerouslySetInnerHTML={{__html:this.state.content}}>
    </div>
  }
}
const GetPost = (defaultStyle) => {
  return class Post extends Component {
    render() {
      return <p style={{...defaultStyle, ...this.props.style}}>123</p>
    }
  }
}

class Index extends Component {
  render() {
    const Post = GetPost({ color: 'red' });
    return <div>
      <Editor/>
      <Post/>
      <Post style={{color: 'blue'}}/>
    </div>
  }
}

ReactDOM.render(<Index/>, document.getElementById('root'));

registerServiceWorker();
