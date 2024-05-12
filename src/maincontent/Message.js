import React from 'react'
import MessageInput from "./MessageInput"
import { useReducer } from "react"
import {contacts,messages} from "./../data.js"
import './message.css'

const Message = ({currentUser,messageSetId}) => {
    
    const getContact=(id)=> {return contacts.find((contact)=>contact.id ===id);}

    const createContactMessage=(message)=>{
        let id = message.owner;
        let c = getContact(id);
        return (<div className="chat-contact-message">
            <img src={c.imageUrl} alt={c.name} className="chat-contact-image" />
            <div className="chat-contact-message-box">{message.content}</div>
        </div>);
    }
    
    const createUserMessage=(message)=>{
        return (<div className="chat-user-message">
            <div className="chat-user-message-box">{message.content}</div>
        </div>);
    }
  
    return (
        <div className="main-content-container">
            { 
                messages[messageSetId].map((mes) =>{
                        let messageQueue=(mes.owner===currentUser)? createUserMessage(mes):createContactMessage(mes)
                        return messageQueue;
                })         
            }
            <MessageInput/>   
        </div>
    );
}

export default Message;