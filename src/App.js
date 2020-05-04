import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component  {
    state = {
        persons: [
            { name: 'max', age: 28 },
            { name: 'manu', age: 29 },
            { name: 'ram', age: 26 }
        ],
        otherState: 'some other value'
    }

    switchNameHandler = (newName) => {
        //console.log('Was clicked');
        this.setState({
            persons: [
                { name: newName, age: 28 },
                { name: 'manu', age: 29 },
                { name: 'ram', age: 25 }
            ]
        })
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: 'max', age: 28 },
                { name: event.target.value, age: 29 },
                { name: 'ram', age: 25 }
            ]
        })
    }

    render(){
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1x solid blue',
            padding: '8px',
            cursor: 'pointer'
        };
        return (
            <div className="App">
                <h1>Hi this is a react app</h1>
                <p>This is really working!</p>
                <button
                    style={style}
                    onClick={ () => this.switchNameHandler('Maximillian!!')}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}/>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'Max!')}
                    changed={this.nameChangedHandler}>My hobbie is racing</Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}/>
            </div>
        );
    }

}

export default App;


