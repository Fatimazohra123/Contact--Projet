import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import AddContact from './AddContact';
import ContactsContex from './ContactsContex';


function App() {
  const [contacts,setContacts] = useState([
    {id:crypto.randomUUID(),name:'Miller Adamas',tel:'+441245789534',ville:"Cambridge"},
    {id:crypto.randomUUID(),name:'Clara Nicole',tel:'+441245089533',ville:"Crawely"},
    {id:crypto.randomUUID(),name:'Jonnah Sulivan ',tel:'+449245089134',ville:"Londres"},
    {id:crypto.randomUUID(),name:'Gramps Jermiah',tel:'+441245780000',ville:"Luton"},
  ]);
  return (
    <div className="App">
      <div className="container">
        <div className="row app-wrapper justfiy-content-center">
          <NavBar />
          <ContactsContex.Provider value={{contacts,setContacts}}>
            <Routes>
              <Route path="/">
                <Route index element={<Home />}  />
                <Route path='new-contact' element={<AddContact />}  />
              </Route>
            </Routes>
          </ContactsContex.Provider>
        </div>
      </div>
    </div>
  );
}
export default App;
