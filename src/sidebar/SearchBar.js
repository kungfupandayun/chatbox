import React,{useState} from 'react'
import {contacts,messages} from"./../data.js";
import ContactCard from './ContactCard'

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    }

    const contactList=contacts.map(contact => 
        <ContactCard key={contact.id} contact={contact} messages={messages[contact.id]}/>
      )

    const filterContacts =  contacts.filter((contact)=>{
        const contactMessage =messages[contact.id];
        const messageCount=contactMessage.filter((message)=>{
          if(message.content.toLowerCase().includes(searchInput.toLowerCase()))
          return true;
        })
    
        if(messageCount.length > 0)
          return true;
        
          if(contact.name.toLowerCase()===searchInput.toLowerCase())
          return true;
          })
    
   return (
    
    <div>
      <input type="text" className="sidebar-search-field" name="Search" 
            placeholder="Search for Conversation" onChange={handleChange}
            value={searchInput}/>
          
      {filterContacts.map(contact => 
      <ContactCard key={contact.id} contact={contact} messages={messages[contact.id]}/>
    )}
    </div>
  )
}

export default SearchBar
