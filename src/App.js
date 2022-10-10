import { Component } from 'react';

import './App.css';

class App extends Component {
 constructor(){
  super();

  this.state = {
    monsters:[   
      {
      name:'Linda',
      id:'123ef12'
     },
     {
      name:'Frank',
      id:'123ef14'
     },
      {
      name:'Jacky',
      id:'123ef15'
     },
     {
      name:'Takamura',
      id:'123ef16'
     }
  ]

 };
}

  render(){
    return (
      <div className="App">
        {
          this.state.monsters.map((monster)=>{
           return <div key={monster.id}><h1>{monster.name}</h1></div>
          })
        }
      </div>
    );
  }
}
  

export default App;
