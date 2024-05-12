import React,{useState} from 'react'
import {contacts,messages} from"./../data.js";
import ContactCard from './ContactCard'

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    }

    const filterContacts =  contacts.filter((contact)=>{
        const contactMessage =messages[contact.id];
        const messageCount=contactMessage.filter((message)=>{
          return message.content.toLowerCase().includes(searchInput.toLowerCase());
        })
        return (messageCount.length > 0) || (contact.name.toLowerCase()===searchInput.toLowerCase());
    });
    
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
