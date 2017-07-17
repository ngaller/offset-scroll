import React from 'react'
import PropTypes from 'prop-types'

class OffsetScroll extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scrolled: false
    }
    this.initRef = this.initRef.bind(this)
    this.onScroll = this.onScroll.bind(this)
  }

  initRef(node) {
    if(node) {
      this.containerNode = node
      this.calculateScrollTop(this.props)
    }
  }

  onScroll(e) {
    this.setState({scrolled: true})
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.offset !== this.props.offset || !this.state.scrolled) {
      this.calculateScrollTop(nextProps)
    }
  }

  calculateScrollTop(props) {
    const top = (props.offset || 0) * props.elementHeight
    this.containerNode.scrollTop = top
  }

  render() {
    return <div className='offset-scroll'
      style={{
        overflow: 'auto'
      }}
      ref={this.initRef}
      onScroll={this.onScroll}>
      {this.props.children}
    </div>
  }
}
OffsetScroll.propTypes = {
  elementHeight: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired
}
export default OffsetScroll
