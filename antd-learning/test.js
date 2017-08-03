import React from 'react';
import {render} from 'react-dom';
// import {store} from './store';

class ContentDetail extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
        }
        
    }

    componentWillReceiveProps(nextProps) {
    }

    componentDidMount() {
    }

    render() {
        const { height,modelData } = this.props
        return (
            <div className="content-detail" style={{height:height}}>
                <div className="content-search">123</div>
                <div className="content-display">
                    {
                        modelData.map((item,i)=>{
                            return <div key={i} className="content-item-wrap">
                                <div className="content-item">
                                    <div className="content-item-icon">
                                        12
                                    </div>  
                                    <div className="content-item-text">
                                        {item.name}
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ContentDetail
