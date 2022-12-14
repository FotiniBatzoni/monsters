

import './card-list.style.css'
import Card from '../card/card.component'

const CardList = ( { monsters }) => (
    <div className="card-list">
    {
       monsters.map((monster)=>{
       return  (
            <Card monster={monster} />
       )}) }
   </div>  
)
  



//Class

//import { Component } from "react";
// class CardList extends Component{

//     render(){
//         const { monsters } = this.props;
        
//         return (
//             <div className="card-list">
//             {
//                 monsters.map((monster)=>{
//                   return  (
//                         <Card monster={monster} />
//                        )}) }
//             </div>
//         )
//     }
// }

export default CardList