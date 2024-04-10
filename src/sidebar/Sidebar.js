import React,{useState} from 'react'
import ContactCard from './ContactCard'
import SearchBar from './SearchBar'
import './sidebar.css';
import {contacts,messages} from"./../data.js";


class SideBar  extends React.Component{
  
  render = () =>{

    return(
      <h1>
        <SearchBar/>
      </h1>
    )
  } 
}
export default SideBar;
