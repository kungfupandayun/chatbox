import React from 'react'
import './sidebar.css';

const ContactCard = ({contact,messages}) => {
  
  return (
    
    <div className='contact-card-container'>
      <img src={contact.imageUrl} alt="" className='contact-card-image'/>
      <div className="contact-card-inner-container contact-card-message">
      <h2 className="contact-card-header">
        {contact.name}
      </h2>
      <span className="">
      11:13 AM
      </span>
      <p className="">{messages.at(-1).content}</p>
      
      </div>
    </div>
  )
}

export default ContactCard
