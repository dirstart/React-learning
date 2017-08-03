import React, { Component } from 'react';
import { Table,Spin } from 'antd';
import 'antd/dist/antd.css';
import './Header.css';

import { store } from './store';

export default class Header extends Component {
    _getColumns() {
        let columns = [{
            title: '种类',
            dataIndex: 'name',
            key: 'categories'
        },{
        	title:'书本数量',
        	dataIndex:'bookCount',
        	key:'count'
        },{
            title:'操作',
            dataIndex:'operate',
            key:'operate',
            render:(text,record)=>(<span>
                <a className="edit-data" href="#">编辑</a>
                <a className="delete-data" href="#">删除</a>
                <a className="topo-data" href="#">数据拓扑</a>
            </span>)
        }]
        return columns;
    }
    render() {
        const {dataList} = this.props;
        console.log(this.props.loadState);

        return (<div>
			<Table
            // loading={this.props.loadState}
            dataSource={dataList}
            columns={this._getColumns()}
            bordered={true}
            pagination={{
                total:dataList.length,
                pageSize:5,
                showSizeChanger:true,
                loading:false,
                showTotal:()=>{return '共'+dataList.length+'条数据'}
            }}
            />
		</div>)
    }
}