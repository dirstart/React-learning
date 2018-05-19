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
            onScroll={this.handleScroll.bind(this)}
            onMouseOver={this.handleMouseOver.bind(this, 'preview')}
            ref={this.previewWrap}>
            <div className="common-box preview-box"
                dangerouslySetInnerHTML={{ __html: this.props.content || '欢迎来到我的编辑器' }}
                ref={this.previewBox} >
            </div>
        </div>)
    }
    handleScroll() {
        if (this.props.previewScroll) {
            this.props.previewScroll();
        }
    }
    handleMouseOver(str) {
        if (this.props.previewMouseOver) {
            this.props.previewMouseOver(str);
        }
    }
}

export default ShowBox;