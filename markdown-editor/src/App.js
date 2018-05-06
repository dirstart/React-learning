import React, { Component } from 'react';
import './App.css';
import marked from 'marked';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewContent: '',
      aceBoxH: null
    }
    this.cacheValue();
    this.wrapScroll = this.wrapScroll.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
  }

  cacheValue() {
    this.currentTabIndex = 1;
  }

  render() {
    let state = this.state;

    return (<div id="app">
      <header key='header' className="edit-header">
        <input type="text" placeholder="输入文章标题..." spellCheck="false" />
      </header>
      <div key='main'
        className="main"
        ref={node => this.aceBox = node}
        style={{height:state.aceBoxH}}>

        <div className="edit-wrap"
             onMouseOver={this.setCurrentIndex.bind(this, 1)}
             onScroll={this.wrapScroll}
             ref={node => this.editWrap = node}>
          <div className="edit-box"
               contentEditable="plaintext-only"
               onInput={this.onContentChange}
               ref={node => this.editBox = node}>
          </div>
        </div>

        <div className="mark-wrap"
             onMouseOver={this.setCurrentIndex.bind(this, 2)}
             onScroll={this.wrapScroll}
             ref={node => this.markWrap = node}>
          <div className="mark-box"
               ref={node => this.markBox = node}
               dangerouslySetInnerHTML={{__html: state.previewContent}}>
          </div>
        </div>
      </div>
    </div>)
  }

  componentDidMount() {
    let clientHeight = document.documentElement.clientHeight,
        offsetHeight = document.querySelector('.edit-box').offsetHeight;
    this.setState({
      aceBoxH: clientHeight - offsetHeight + "px"
    });
  }

  onContentChange(e) {
    this.setState({
      previewContent: marked(e.target.innerText)
    });
  }

  setCurrentIndex(index) {
    this.currentTabIndex = index;
  }

  wrapScroll() {
    console.log('e');
  }
}

export default App;
