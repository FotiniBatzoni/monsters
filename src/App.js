import { Component } from 'react';

import './App.css';

//First runs the constructor
//Then The render to display the page
//Then the componentDidMount

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters:[]
    };
    console.log('constructor')
  }

  //Mount = First Time the Component renders
  componentDidMount(){
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=> response.json())
      .then((users) => this.setState(()=>{
        return {monsters: users}   ///{monsters: users} =the monsters point to users
      },
      ()=>{
        console.log(this.state)
      }
      ))
  }

  render(){
    console.log('render')
    return (
      <div className="App">
        <input 
          className='search-box' 
          type='search' 
          placeholder= 'search monsters' 
          onChange={(event) =>{
            const searchString = event.target.value.toLocaleLowerCase()
            const filteredMonsters = this.state.monsters.filter(monster=>{ 
               return  monster.name.toLowerCase().includes(searchString)
           });

           this.setState(() =>{
            return { monsters: filteredMonsters}
           })
        }}/>
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
