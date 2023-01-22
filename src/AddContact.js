import React, { useContext, useRef } from 'react'
import './App.css';
import ContactsContex from './ContactsContex';

function AddContact() {
  const { setContacts } = useContext(ContactsContex);
  const phoneRef = useRef();
  const cityRef = useRef();
  const nameRef = useRef();
  const handleAddContacts = (e) => {
    e.preventDefault();
    setContacts(prevContacs => [...prevContacs, {
      id: crypto.randomUUID(),
      name: nameRef.current.value,
      tel: phoneRef.current.value,
      ville: cityRef.current.value
    }]);
    phoneRef.current.value = '';
    nameRef.current.value = '';
    cityRef.current.value = '';
  }
  return (
    <div className="mx-auto col-6">
      <div className="card text-black">
        <div className="card-body pb-2" style={{ height: '60vh' }}>
          <form className='mb-3'>
            <div className="mb-3 row">
              <div className="col">
                <label  className="form-label">Phone Number</label>
                <input type="text" ref={phoneRef} className="form-control shadow-none" placeholder="Phone Number..." aria-describedby="emailHelp" />
              </div>
              <div className="col">
                <label className="form-label">Name</label>
                <input type="text" ref={nameRef} className="form-control shadow-none" placeholder="Name..." aria-describedby="emailHelp" />
              </div>
            </div>
            <div className="mb-3 row">
              <div className="col">
                <label  className="form-label">City</label>
                <input type="text" ref={cityRef} className="form-control shadow-none" placeholder="City..." aria-describedby="emailHelp" />
              </div>
            </div>
            <div className="row">
              <button onClick={handleAddContacts} className='col-5 mx-auto btn' style={{ background: 'lightsteelblue' }}>Add To Contacts</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


export default AddContact