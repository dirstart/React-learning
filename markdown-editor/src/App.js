import React, { Component } from 'react';
import marked from 'marked';

import EditBox from './EditBox';
import ShowBox from './ShowBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aceBoxHeight: null,
      previewContent: ''
    }

    this.cacheValue();
    this.editScroll = this.editScroll.bind(this);
  }
  componentDidMount() {
    const clientHeight = document.documentElement.clientHeight;
    this.setState({
      aceBoxHeight: clientHeight + "px"
    });
    this.setScrollValue();
  }
  render() {
    const {previewContent} = this.state;
    return (<div className="main">
      <EditBox onChangeContent={this.onContentChange.bind(this)} 
               ref={editFather => this.editFather = editFather}/>
      <ShowBox content={previewContent}
               ref={previewFather => this.previewFather = previewFather} />
    </div>)
  }

  cacheValue() {
    this.currentTabIndex = 1;
    this.hasContentChange = false;
    this.scale = 1;
  }

  setCurrentIndex(index) {
    this.currentTabIndex = index;
  }
  
  editScroll(e) {
    this.hasContentChange && this.setScrollValue();
  }

  onContentChange(e) {
    this.setState({
      previewContent: marked(e.target.innerText, {breaks: true})
    });
    !this.hasContentChange && (this.hasContentChange = true);
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
    console.log(this.scale);
    this.hasContentChange = false;
  }
}

export default App;