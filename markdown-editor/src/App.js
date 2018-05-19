import React, { Component } from 'react';
import marked from 'marked';
import hljs from 'highlight.js';

import EditBox from './EditBox';
import ShowBox from './ShowBox';

import './style/common.css';

hljs.configure({
  tabReplace: '  ',
  classPrefix: 'hljs-',
  languages: ['CSS', 'HTML, XML', 'JavaScript', 'PHP', 'Python', 'Stylus', 'TypeScript', 'Markdown']
});

marked.setOptions({
  hljs(code) {
    return hljs.highlightAuto(code).value
  }
})

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aceBoxHeight: null,
      previewContent: ''
    }

    this.cacheValue();
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    const clientHeight = document.documentElement.clientHeight;
    this.setState({
      aceBoxHeight: clientHeight + "px"
    });
    this.setScrollValue();
  }
  render() {
    const { previewContent, aceBoxHeight } = this.state;

    return (<div className="main">
      <EditBox onChangeContent={this.onContentChange.bind(this)}
        ref={editFather => this.editFather = editFather}
        editMouseOver={this.handleMouseOver.bind(this)}
        editScroll={this.handleScroll.bind(this)} />
      <ShowBox content={previewContent}
        ref={previewFather => this.previewFather = previewFather}
        previewMouseOver={this.handleMouseOver.bind(this)}
        previewScroll={this.handleScroll.bind(this)} />
    </div>)
  }

  cacheValue() {
    this.currentTabIndex = 'edit';
    this.hasContentChange = false;
    this.scale = 1;
  }
  
  handleScroll() {
    const previewWrap = this.previewFather.previewWrap.current;
    const editWrap = this.editFather.editWrap.current;
    this.hasContentChange && this.setScrollValue();

    if (this.currentTabIndex === 'edit') {
      previewWrap.scrollTop = editWrap.scrollTop * this.scale;      
    } else if (this.currentTabIndex === 'preview') {
      editWrap.scrollTop = previewWrap.scrollTop / this.scale;
    }
  }

  handleMouseOver(str) {
    this.currentTabIndex = str;
  }

  onContentChange(e) {
    !this.hasContentChange && (this.hasContentChange = true);
    this.setState({
      previewContent: marked(e.target.innerText)
    });
  }

  setScrollValue() {
    // 看下滚动条比例的差距
    const pWrapH = this.previewFather.previewWrap.current.offsetHeight;
    const pBoxH = this.previewFather.previewBox.current.offsetHeight;
    const eWrapH = this.editFather.editWrap.current.offsetHeight;
    const eBoxH = this.editFather.editBox.current.offsetHeight;

    const pDiffer = pWrapH - pBoxH;
    const eDiffer = eWrapH - eBoxH;
    this.scale = pDiffer / eDiffer;
    this.hasContentChange = false;
  }
}

export default App;