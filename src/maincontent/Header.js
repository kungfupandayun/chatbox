import React from 'react'
import {contacts} from "./../data.js";
import Button from './Button.js';
import './header.css';

const Header = (props) => {
    let contact=contacts.find(x=>x.id===props.messageSetId);
    const buttons =  [
        {src : "./../assets/icons/phone.svg",alt:"phone"}  ,
        {src : "./../assets/icons/video.svg",alt:"video"} ,
        {src : "./../assets/icons/ellipsis-v.svg",alt:"ellipsis"} 
      ]
  return (
    <header className="chat-header">
        <h1>Chat with {contact.name}</h1>
        <div className="header-button-container">
            {buttons.map(button=>
                <Button src={button.src} alt={button.alt} />
           )}
        </div>
    </header>
  )
}

export default Header
