import React from 'react'

const STATUS = {
  NORMAL: 'normal',
  HOVERED: 'hovered',
}

export default class Link extends React.Component {
  constructor(props) {
    super(props)

    this._onMouseEnter = this._onMouseEnter.bind(this)
    this._onMouseLeave = this._onMouseLeave.bind(this)

    this.state = {
      class: STATUS.NORMAL
    }
  }
  
  _onMouseEnter() {
    this.setState({ class: STATUS.HOVERED })
  }
  
  _onMouseLeave() {
    this.setState({ class: STATUS.NORMAL })
  }

  render() {
    let { uri, children } = this.props

    return <a 
      className={this.state.class}
      onMouseEnter={this._onMouseEnter}
      onMouseLeave={this._onMouseLeave}
      href={uri}
    >{children}</a>
  }
}
