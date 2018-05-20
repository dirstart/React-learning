import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import './test.less';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

const store = createStore(rootReducer);

class Index extends Component {
    render() {
        return (<div>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>)
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Index/>
    </Provider>, document.getElementById('root'));

registerServiceWorker();
