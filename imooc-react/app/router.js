import React from 'react';
import ReactDOM from 'react-dom';
import Index from './Index';
import Test from './component/Test';

import {Router,Route,hashHistory} from 'react-router';

export default class Root extends React.Component{
  render(){
    return (
      <Router history={hashHistory}>
        <Route component={Index} path="/"></Route>

        <Route component={Test} path="test/:id"></Route>

      </Router>
    );
  };
}

ReactDOM.render(<Root />, document.getElementById('root'));