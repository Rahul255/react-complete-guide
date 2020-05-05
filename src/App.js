import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from  './ErrorBoundary/ErrorBoundary';

class App extends Component  {
    state = {
        persons: [
            { id: 'ass' ,name: 'max', age: 28 },
            { id: 'advd',name: 'manu', age: 29 },
            { id: 'des',name: 'ram', age: 26 }
        ],
        otherState: 'some other value',
        showPersons: false
    }


    nameChangedHandler = ( event, id) => {

        const  personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const  person = {
            ...this.state.persons[personIndex]
        };

        //const person = Object.assign({}, this.state.persons[personIndex];
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons} );
    }

    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons;
        persons.splice(personIndex,1);
        this.setState({persons: persons});
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});

    }

    render(){
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1x solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };

        let  persons = null;
        let btnClass = [classes.Button];
        if (this.state.showPersons){
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <ErrorBoundary key={person.id} ><Person
                            click={ () => this.deletePersonHandler( index )}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={ (event) => this.nameChangedHandler(event, person.id)}/></ErrorBoundary>
                    })}

                </div>
            );
            // style.backgroundColor = 'red';
            // style[':hover'] = {
            //     backgroundColor: 'salmon',
            //         color: 'black'
            // };
        }

        const assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red); // classes = [red]
        }
        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold); // classes = [red,bold]
        }

        return (

                <div className={classes.App}>
                    <h1>Hi this is a react app</h1>
                    <p className={assignedClasses.join(' ')}>This is really working!bold</p>
                    <button className={btnClass.join(' ')}
                        onClick={this.togglePersonsHandler}>Toggle Persons</button>
                    {persons}
                </div>

        );
    }

}

export default App;


