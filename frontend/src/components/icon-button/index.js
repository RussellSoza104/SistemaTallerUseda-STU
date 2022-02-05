import React, { Component } from 'react';

//Componente de iconos como botones
export class IconButton extends Component {
  render() {
    return (
      <button onClick={this.props.OnClick} className={`${this.props.color} ${this.props.marginRight}
              border-none p-1 m-3`}>
        <span className={`material-icons block ${this.props.width}`}>{this.props.name}</span>
      </button>
    )
  }
}