import React, { Component } from 'react';
import marked from 'marked';

import EditBox from './EditBox';
import ShowBox from './ShowBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewContent: ''
    }
  }
  handleChange(e) {
    this.setState({
      previewContent: marked(e.target.innerText, {breaks: true})
    })
  }
  render() {
    const {previewContent} = this.state;
    return (<div className="main">
      <EditBox onChangeContent={this.handleChange.bind(this)}/>
      <ShowBox content={previewContent} />
    </div>)
  }
}

export default App;