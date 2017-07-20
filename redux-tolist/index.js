import React from 'react';
import ReactDOM from 'react-dom';
import {
	createStore
} from 'redux';
import {
	Provider
} from 'react-redux';
import App from './components/App';
import reducer from './reducers';

const store = createStore(reducer);

ReactDOM.render(<Provider>
	<App/>
</Provider>, document.getElementById('root'));