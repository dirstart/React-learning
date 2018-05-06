import React, { Component } from 'react';
import './App.css';
import marked from 'marked';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewContent: ''
    }
  } 
  render() {
    let state = this.state;

    return (<div id="app">
      <header key='header'>
        <input type="text" placeholder="输入文章标题..." spellCheck="false" />
      </header>
      <div key='main'
        className="main"
        ref={node => this.aceBox = node}
        style={{height:state.aceBoxH}}>

        <div className="edit-wrap" ref={node => this.editWrap = node}>
          <div className="edit-box"
               contentEditable="plaintext-only"
               onInput={this.onContentChange.bind(this)}
               ref={node => this.editBox = node}>
          </div>
        </div>

        <div className="mark-wrap" ref={node => this.markWrap = node}>
          <div className="mark-box"
               ref={node => this.markBox = node}
               dangerouslySetInnerHTML={{__html: state.previewContent}}>
          </div>
        </div>
      </div>
    </div>)
  }

  onContentChange(e) {
    this.setState({
      previewContent: marked(e.target.innerText)
    });
  }
}

export default App;
