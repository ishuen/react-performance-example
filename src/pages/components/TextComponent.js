import React from 'react';

class TextComponent extends React.Component{
  shouldComponentUpdate(nextProps, nextState){
    console.log("[1st] same value?", nextProps.inputObject === this.props.inputObject);
    return nextProps.inputObject !== this.props.inputObject;
  }
  render() {
    return (
      <div>
        <h2>{this.props.inputObject.str}</h2>
      </div>
    );
  }
}
export default TextComponent;