import React from 'react';
import {Link} from 'react-router';
class Header extends React.Component {
    render(){
        return (<div>
            <h1>I'm Header</h1>
            <ul>
                <li><Link to={'/'} >首页</Link></li>
                <li><Link to={'test/1234'}>test页面</Link></li>
            </ul>
        </div>)
    }
}
export default Header;