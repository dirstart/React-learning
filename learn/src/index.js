import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
class Input extends Component {
  constructor() {
    super();
    this.state = {
      content: ''
    }
  }
  handleInputChange(event) {
    this.setState({
      content: event.target.value
    }, () => {
      if (!!this.props.share) {
        const {
          content
        } = this.state;
        this.props.share({
          content
        });
      } else {
        console.log("error");
      }
    });

  }
  render() {
    return (
      <div>
        <input type='number' value={this.state.content} onChange={this.handleInputChange.bind(this)} />
      </div>
    )
  }
}

class PercentageShower extends Component {
  static defaultProps = {
    number_value: ''
  }
  render() {
    return (
      <div>{this.props.number_value}</div>
    )
  }
}

class PercentageApp extends Component {
  constructor() {
    super();
    this.state = {
      content: ''
    }
  }
  handleShare(number) {
    console.log(number);
    this.setState({
      content: number.content
    })
  }
  render() {
    return (
      <div>
        <Input share={this.handleShare.bind(this)}/>
        <PercentageShower number_value={this.state.content} />
      </div>
    )
  }
}

ReactDOM.render(<PercentageApp />, document.getElementById('root'));