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
    console.log('有东西吗', e.target.innerText);
  }
  render() {
    return (<div className="main">
      <EditBox onChangeContent={this.handleChange}/>
      <ShowBox/>
    </div>)
  }
}

export default App;