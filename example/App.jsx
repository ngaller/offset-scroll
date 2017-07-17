import React from 'react'
import OffsetScroll from '../src/index'

// This is an example of how you would use the component in your app
// The "App" component simulates the environment that YOU will need to provide
// when using the OffsetScroll component.
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      offset: 3
    }
    this.setOffset = this.setOffset.bind(this)
  }

  setOffset(e) {
    this.setState({
      offset: Number(e.target.value)
    })
  }

  render() {
    return <div>
      <div>
        Set offset:
        <input type='number' value={this.state.offset} onChange={this.setOffset}/>
      </div>
      <div className='scroll-container'>
        <OffsetScroll offset={this.state.offset} elementHeight={40}>
          <div className='scroll-item' style={{backgroundColor: 'red'}}>1</div>
          <div className='scroll-item' style={{backgroundColor: 'blue'}}>2</div>
          <div className='scroll-item' style={{backgroundColor: 'magenta'}}>3</div>
          <div className='scroll-item' style={{backgroundColor: 'green'}}>4</div>
          <div className='scroll-item' style={{backgroundColor: 'cyan'}}>5</div>
          <div className='scroll-item' style={{backgroundColor: 'yellow'}}>6</div>
          <div className='scroll-item' style={{backgroundColor: 'black'}}>7</div>
          <div className='scroll-item' style={{backgroundColor: 'brown'}}>8</div>
          <div className='scroll-item' style={{backgroundColor: 'brick'}}>9</div>
          <div className='scroll-item' style={{backgroundColor: 'salmon'}}>10</div>
        </OffsetScroll>
      </div>
    </div>

  }
}
export default App
