

import './search-box.styles.css'

const SearchBox = ({className, placeholder,onChangHandler}) => (
        <input 
        className={`search-box ${className}`}
        type='search' 
        placeholder= {placeholder}
        onChange={onChangHandler}
        />
 ) 






//Class

//import { Component } from "react";

// class SearchBox extends Component{

//     render(){
       
//         return (
//             <input 
//             className={`search-box {this.props.className}`}
//             type='search' 
//             placeholder= {this.props.placeholder}
//             onChange={this.props.onChangHandler}/>
//         )
//     }
// }

export default SearchBox