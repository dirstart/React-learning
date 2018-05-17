import React, { Component } from 'react';

class ShowBox extends Component {
    constructor(props) {
        super(props);
        this.previewBox = React.createRef();
        this.previewWrap = React.createRef();
    }
    componentDidMount() {
    }
    render() {
        return (<div className="common-wrap preview-wrap"
            ref={this.previewWrap}>
            <p className="common-box preview-box" dangerouslySetInnerHTML={{ __html: this.props.content || '欢迎来到我的编辑器' }}
                ref={this.previewBox} >
            </p>
        </div>)
    }
}

export default ShowBox;