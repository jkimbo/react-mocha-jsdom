import React from 'react/addons';

const TextInput = React.createClass({
  getInitialState() {
    return {
      value: ''
    };
  },

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  },

  render() {
    const {value} = this.state;
    return (
      <input type="text" value={value} onChange={this.handleChange} />
    );
  }
});

export default TextInput;
