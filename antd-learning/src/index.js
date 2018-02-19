import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

import { store } from './store';

class Index extends Component {
    constructor() {
        super();
        this.state = ({
            dataList: [],
            loading: true
        })
    }
    componentWillMount() {}

    componentDidMount() {

        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
        // 经过百度后明白在这里添加数据会比较好
        // 先进行异步请求，之后处理，之后放入state中

        let tem_data = [];
        fetch('http://novel.juhe.im/categories')
            .then(res => res.json())
            .then((res) => {
                if (res.code == 1) {
                    tem_data = res.data.male;
                    store.dispatch({
                        type: 'GET_DATA',
                        data: tem_data
                    })
                } else {
                    console.log("请求的数据code值错误")
                }
            })
            .then(this.setState({
                loading: false
            }))
            .catch((e) => console.log("发生错误，错误的原因是-error:" + e))

    }


    render() {
        console.log("进行了render");
        let state = store.getState();
        const {data} = state;
        console.log("data", data);
        return (<div>
			<Header loadState={this.state.loading} dataList={data} />
		}
		</div>)
    }
}

ReactDOM.render(<Index/>, document.getElementById('root'));