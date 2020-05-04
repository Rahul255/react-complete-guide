import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'max', age: 28 },
            { name: 'manu', age: 29 },
            { name: 'ram', age: 26 }
        ]
    }
  render() {
    return (
      <div className="App">
            <h1>Hi this is a react app</h1>
          <p>This is really working!</p>
          <button>Switch Name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbie is racing </Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
