import React, { useContext, useEffect, useRef, useState } from 'react'
import './App.css';
import Contact from './Contact';
import ContactsContex from './ContactsContex';

export default function Home() {
  const { contacts } = useContext(ContactsContex);
  const [shownContacts,setShownContacts] = useState([]);
  const [order,setOrder] = useState(true);
  const searchRef = useRef();
  const handleSearch = ()=>{
    if (searchRef.current.value.trim()=='') {
      setShownContacts(contacts);
      return;
    };
    let shown = contacts.filter(contact=>contact.ville.toLowerCase().includes(searchRef.current.value.toLowerCase()));
    setShownContacts(shown);
  }
  
  return (
    <div className="mx-auto col-6">
      <div className="card text-black">
        <div className="card-body pb-2" style={{height:'86vh'}}>
          <form className='px-5 mb-3'>
            <input type="text" ref={searchRef} onChange={handleSearch} className='form-control shadow-none' placeholder='search' />
          </form>
          <div className="d-flex">
            <span onClick={()=>setOrder(!order)} style={{ cursor: 'pointer' }} >sort: {order ? 'increasing' : 'decreasing'} </span>
          </div>
          {
            shownContacts.length>0 ?
              order ? shownContacts.sort((a,b)=> (a.name < b.name ? 1 : -1)).map(person => <Contact key={person.id} person={person} />) 
                :shownContacts.sort((a,b)=> (a.name > b.name ? 1 : -1)).map(person => <Contact key={person.id} person={person} />) 
            : order ? contacts.sort((a,b)=> (a.name < b.name ? 1 : -1)).map(person => <Contact key={person.id} person={person} />) 
                : contacts.sort((a,b)=> (a.name > b.name ? 1 : -1)).map(person => <Contact key={person.id} person={person} />) 
          }
        </div>
      </div>
    </div>
  )
}
