
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';


//FUNCTIONAL COMPONENTS
import { useState } from 'react';

const App = () =>{
  const [searchField, setSearchField] = useState('');   //[value,setValue]
  console.log(searchField)

  const onSearchChange = (event) =>{
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
  }

  return (
    <div className="App">
    <h1 className='app-title'>Monsters Rolodex</h1>
    <SearchBox 
      className='monsters-search-box'
      onChangHandler ={onSearchChange} 
      placeholder='Search Monsters'/>
  
    {/* //<CardList monsters={filteredMonsters} /> */}
  </div>
  )

}


//CLASS COMPONENTS
//import { Component } from 'react';


//First runs the constructor
//Then The render to display the page
//Then the componentDidMount

// class App extends Component {
//   constructor(){
//     super();

//     this.state = {
//       monsters:[],
//       searchField:''
//     };
//     console.log('constructor')
//   }

//   //Mount = First Time the Component renders
//   componentDidMount(){
//     console.log('componentDidMount')
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response)=> response.json())
//       .then((users) => this.setState(()=>{
//         return {monsters: users}   ///{monsters: users} =the monsters point to users
//       }
//       ))
//   }

//   onSearchChange = (event) =>{
//     const searchField = event.target.value.toLocaleLowerCase();
//    this.setState(() =>{
//     return {searchField}
//    })
//   }

//   render(){
//     console.log('render')

//     const {monsters, searchField} = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter(monster=>{ 
//       return  monster.name.toLowerCase().includes(searchField)
//     });


//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox 
//           className='monsters-search-box'
//           onChangHandler ={onSearchChange} 
//           placeholder='Search Monsters'/>
    
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }
  

export default App;
