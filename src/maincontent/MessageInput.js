
import React from 'react'
import './message.css';

export const MessageInput = () => {
 
  return (
    <div className="chat-input-container">
        <input type="text" id="chat-message" placeholder='Write your message here' className='chat-input-message'/>
        <button className='chat-input-button' onClick={()=>{
             
            }}>Send</button>
    </div>
  )
}

export default MessageInput
