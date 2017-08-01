import React from 'react';
export default class Test extends React.Component {
    render() {
        return (<div>I'm TEST X. <h1>hhh</h1><h2>ID:{this.props.params.id}</h2></div>)
    }
}