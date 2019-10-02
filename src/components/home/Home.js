import React, { Component } from 'react'
import './home.css'

class Home extends Component {
  render() {
    return (
      <div className="landingHero">
        <img className="landingImg" src={require('./21301.png')}></img>
      </div>
    )
  }
}

export default Home