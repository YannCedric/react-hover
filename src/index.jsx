import React, { Component } from 'react'

class Hover extends Component {
  constructor(){
    super()
    this.state = {
        isHover: false
    }
  }

  render() {
        const {hover, style} = this.props,
            { isHover } = this.state,
            { children } = this.props

        let currentStyle = { ...children.props.style, ...style }
            if (isHover)  currentStyle = { ...currentStyle, ...hover}

        const element = React.cloneElement( children, {style: currentStyle} )
        return (
        <div style={{width: 0, height:0, backgroundColor: 'red'}}
            onMouseEnter={event => this.setState({isHover: true})} 
            onMouseLeave={event => this.setState({isHover: false})}>
            {element}
        </div>
    );
  }
}

export default Hover

