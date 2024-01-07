import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import BasicInfo from './componets/BasicInfo'

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        person: [{
          Name: 'Keyondre Sincere Baxter',
          Number: '(980) 230-8366',
          DOB: '05/08/2004',
        },
        {
          Name: 'Keydre Siere Baer',
          Number: '(980) 240-2466',
          DOB: '05/08/1954',
        },
        {
          Name: 'ondre Sine ter',
          Number: '(535) 230-8366',
          DOB: '05/29/1994',
        }]
      };
    }

    render() {
      const person  = this.state.person;
      return (
        <div className="App">
          {person.map((person)=> <BasicInfo person={person} />)}
        </div>
      );
    }
  }



export default App;
