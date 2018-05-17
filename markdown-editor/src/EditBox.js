import React, { Component } from 'react';

class EditBox extends Component {
    constructor(props) {
        super(props);
        this.editWrap = React.createRef();
        this.editBox = React.createRef();
    }
    render() {
        return (<div className="common-wrap edit-wrap"
                     onScroll={this.handleScroll.bind(this)}
                     ref={this.editWrap}>
            <article contentEditable="plaintext-only"
                     onInput={this.props.onChangeContent}
                     ref={this.editBox}
                     className="common-box edit-box">
            </article>
        </div>)
    }

    handleScroll() {
        console.log('子组件的scroll');
    }
}

export default EditBox;