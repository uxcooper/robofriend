import React, {Component} from 'react';
import CardList from '../component/CardList';
import {robots} from '../robots';

class App extends Component {
  render(){
    return(
      <div className="tc">
        <CardList robots={robots} />
      </div>
    )
  }
}

export default App;