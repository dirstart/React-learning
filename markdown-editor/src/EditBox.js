import React, { Component } from 'react';

class EditBox extends Component {
    render() {
        return (<div>
            <article contentEditable
                     onInput={this.props.onChangeContent}></article>
        </div>)
    }
}

export default EditBox;