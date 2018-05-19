import React, { Component } from 'react';

import {Route, Switch} from 'react-router-dom';

const Home = () => {
    return (<div>
        testxx
    </div>)
}

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Switch>
                <Route path='/' component={Home}/>
                <Route exact path="/roster"></Route>
                {/* <Route path='/roster' component={<div>is</div>}/>
                <Route path='/schedule' component={<div>easy</div>}/> */}
            </Switch>
        </div> )
    }
}
 
export default Main;