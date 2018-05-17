import React, { Component } from 'react';

class EditBox extends Component {
    render() {
        return (<div className="edit-wrap">
            <article contentEditable="plaintext-only"
                     onInput={this.props.onChangeContent}
                     className="edit-box">
            </article>
        </div>)
    }
}

export default EditBox;