import React, { Component } from 'react'

class Hover extends Component {
  constructor(){
    super()
    this.state = {
        isHover: false
    }
  }

  render() {
        const { hover, style } = this.props,
            { isHover } = this.state,
            { children } = this.props

        let currentStyle = { ...style }
            if (isHover)  currentStyle = { ...currentStyle, ...hover}

        return (
        <div style={currentStyle}
            onMouseEnter={event => this.setState({isHover: true})} 
            onMouseLeave={event => this.setState({isHover: false})}>
            {children}
        </div>
    );
  }
}

export default Hover

