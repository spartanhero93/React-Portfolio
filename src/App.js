import React, { Component } from 'react';
import Header from './Components/Header';
import Calculator from './Components/calculator/Calculator';
import BtnToggle  from './Components/BtnToggle';

class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <Calculator/>
          <BtnToggle/>
        </div>
    )
  }
}

export default App;
