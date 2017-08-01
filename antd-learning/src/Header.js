import React, { Component } from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';

import { store } from './store';

export default class Header extends Component {
    _getColumns() {
        let columns = [{
            tltle: '书名',
            dataIndex: 'nama',
            key: 'name'
        }]
    }
    render() {
        const {dataList} = this.props;

        return (<div>
			<Table
            dataSource={dataList}
            columns={this._getColumns()}
            bordered={true}
            />
		</div>)
    }
}