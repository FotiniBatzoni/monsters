import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

//First runs the constructor
//Then The render to display the page
//Then the componentDidMount

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters:[],
      searchField:''
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
      }
      ))
  }

  onSearchChange = (event) =>{
    const searchField = event.target.value.toLocaleLowerCase();
   this.setState(() =>{
    return {searchField}
   })
  }

  render(){
    console.log('render')

    const {monsters, searchField} = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter(monster=>{ 
      return  monster.name.toLowerCase().includes(searchField)
    });


    return (
      <div className="App">
        <SearchBox 
          className='search-box'
          onChangHandler ={onSearchChange} 
          placeholder='Search Monsters'/>
    
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
  

export default App;
