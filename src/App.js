import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Newssome from './components/Newssome'


export class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
  <Newssome/>
      </div>
    )
  }
}

export default App