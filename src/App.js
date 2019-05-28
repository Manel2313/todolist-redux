import React, { Component } from 'react'
import './App.css'
import Input from './component/input.js'
import Main from './component/main.js'
class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="App">
        <h2>Fill your TODO-LIST !</h2>
        <Input />
        <Main />
      </div>
    );
  }
}
 
export default App;