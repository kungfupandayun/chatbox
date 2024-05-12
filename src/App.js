
import SideBar from "./sidebar/Sidebar.js";
import React from "react";
import './App.css';
import {contacts,messages} from"./data.js";
import Header from "./maincontent/Header"
import Message from "./maincontent/Message"

class App  extends React.Component{

  setMessageSetId = (id) => {
    this.messageSetId=id;
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
        <Message currentUser="177b547a-3261-11eb-adc1-0242ac120002" messageSetId={contacts[0].id}/>
      </main>
    </div>
    )
  } 
}

export default App;