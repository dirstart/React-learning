import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddTodo extends Component {
    render() {
        return (
            <div>
        <input type='text' ref={(input) => {
                this.input = input
            }} />
        <button onClick={e => this.handleClick(e)}>
          Add
        </button>
      </div>
        );
    }

    handleClick(e) {

        const text = this.input.value.trim();
        this.props.onAddClick(text);
        this.input.value = '';
    }
}

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
}