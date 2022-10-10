import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
 constructor(){
  super();

  this.state = {
    name:{
      firstname:'Fenia',
      lastname:'Batz'
    },
    company:'Progressnet'
  }
 }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi! I'm {this.state.name.firstname}  {this.state.name.lastname} and I work at {this.state.company}
          </p>
          <button onClick={()=>{
            //this.setState({name:{firstname:'Takamura',lastname:'Balis'},company:'NHS'})
            //or
            this.setState((state,props)=>{
              return {name:{firstname:'Takamura',lastname:'Balis'},company:'NHS'}
            }, 
            ()=>{
              //tis function will execute after the first function has been executed
              console.log(this.state)
            })
          }}>
            Change Name
          </button>
        </header>
      </div>
    );
  }
  }
  

export default App;
