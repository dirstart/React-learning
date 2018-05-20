import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import './test.less';

const store = createStore(rootReducer);

class Index extends Component {
    render() {
        return (<div>
            123
        </div>)
    }
}

ReactDOM.render(<Provider store={store}><Index></Index></Provider>, document.getElementById('root'));
registerServiceWorker();
