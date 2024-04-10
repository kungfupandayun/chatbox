
import SideBar from "./sidebar/Sidebar.js";
import React from "react";
import './App.css';
import {contacts} from"./data.js";
import Header from "./maincontent/Header"


class App  extends React.Component{

  setMessageSetId = (id) => {
    this.messageSetId=id;
    this.rootElement.innerHTML="";
    console.log(this.messageSetId);
    this.render();
  }

  
  updateMessages = (messageObject, messageSetId) => {
    const messages={... this.messages};
    messages[messageSetId].push(messageObject);
    this.rootElement.innerHTML="";
    console.log(this.messageSetId);
    this.render();
  }

  render = () =>{
    return(
    <div className="app-container">
      <aside className="sidebar-container">
        <SideBar/>
      </aside>
      <main className="main-content">
        <Header messageSetId={contacts[0].id}/>
      </main>
    </div>
      
      
    )
  } 
}

export default App;