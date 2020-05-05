import React, { Component } from 'react';
import classes from './App.css';
import Person from '../Components/Persons/Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";

class App extends Component  {
    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
    }
    state = {
        persons: [
            { id: 'ass' ,name: 'max', age: 28 },
            { id: 'advd',name: 'manu', age: 29 },
            { id: 'des',name: 'ram', age: 26 }
        ],
        otherState: 'some other value',
        showPersons: false
    };

    static getDerivedStateFromProps(props,state) {
        console.log('[App.js] getDerivedStateFromProps');
        return state;
    }
    // componentWillUnmount() {
    //     console.log('[App.js] componentWillMount');
    // }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
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
        console.log('[App.js] render');

        let  persons = null;
        if (this.state.showPersons){
            persons =(
                    <div>
                        <Persons
                            persons={this.state.persons}
                            clicked={this.deletePersonHandler}
                            changed={this.nameChangedHandler}
                        />
                    </div>
                );
        }
        return (

                <div className={classes.App}>
                    <Cockpit
                        title={this.props.appTitle}
                        showPersons={this.state.showPersons}
                        persons={this.state.persons}
                        clicked={this.togglePersonsHandler}
                    />
                    {persons}
                </div>

        );
    }

}

export default App;


