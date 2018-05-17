import React, { Component } from 'react';

class ShowBox extends Component {
    render() {
        return (<div className="preview-wrap">
            <p className="preview-box" dangerouslySetInnerHTML={{__html: this.props.content || '欢迎来到我的编辑器'}}></p>
        </div>)
    }
}

export default ShowBox;