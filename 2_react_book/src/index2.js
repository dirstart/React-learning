import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class LikeButton extends Component {
    constructor() {
        super();
        this.state = {
            isLiked: false
        }
    }

    static defaultProps = {
        likeText: '取消',
        unLikeText: '点赞'
    }
    handleClick() {
        this.setState({
            isLiked: !this.state.isLiked
        }, () => {
            console.log(this.state.isLiked)
        });
    }
    render() {
        // const likeText = this.props.likeText || '取消';
        // const unLikeText = this.props.unLikeText || '点赞';
        return (<button onClick={this.handleClick.bind(this)}>
    	{this.state.isLiked ? this.props.likeText : this.props.unLikeText}
    </button>)
    }
}
class Index extends Component {
    constructor() {
        super();
        this.state = {
            likeText: '赞',
            unLikeText: '已赞'
        }
    }
    handleChange() {
        this.setState({
            likeText: '谢谢',
            unLikeText: '对不起'
        })
    }
    render() {
        return <div>
			<LikeButton
	            likeText = {this.state.likeText}
	            unLikeText = {this.state.unLikeText}
            ></LikeButton>
			<button onClick={this.handleChange.bind(this)}>修改</button>
		</div>
    }
}

ReactDOM.render(<Index/>, document.getElementById('root'));