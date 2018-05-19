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
            onMouseOver={this.handleMounseOver.bind(this, 'edit')}
            ref={this.editWrap}>
            <article contentEditable="plaintext-only"
                onInput={this.props.onChangeContent}
                ref={this.editBox}
                className="common-box edit-box">
            </article>
        </div>)
    }

    handleScroll() {
        if (this.props.editScroll) {
            this.props.editScroll();
        }
    }

    handleMounseOver(str) {
        if (this.props.editMouseOver) {
            this.props.editMouseOver(str);
        }
    }
}

export default EditBox;