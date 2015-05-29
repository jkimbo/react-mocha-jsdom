import React from 'react/addons';

const Button = React.createClass({
  getInitialState() {
    return {
      clicked: false
    };
  },

  handleClick(event) {
    this.setState({
      clicked: true
    });
  },

  render() {
    return (
      <button onClick={this.handleClick} />
    );
  }
});

export default Button;
