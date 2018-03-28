 import React, {Component} from 'react'

function ListContacts (props) {
     return (
       <ol className='contact-lists'>
        {props.contacts.map((contact) => (
          <li key={contact.id} className='contact-list-item'>
            <div className='contact-avatar' style={{
              backgroundImage: 'url(s{contact.avatarURL})'
            }}/>
            <div className='contact-details'>
              <p>{contact.name}</p>
              <p>{contact.email}</p>
            </div>
            <button onClick={() => props.onDeleteContact(contact)} className='contact-remove'>
              Remove
            </button>
          </li>
        ))}
       </ol>
     )
   }

   ListContacts.propTypes = {
     contacts: PropTypes.array.isRequired,
     onDeleteContact PropTypes.func.isRequired:
   }

 export default ListContacts
