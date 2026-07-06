import React from 'react'
import "./ContactList.css"
import userdata from './userlistdata';

function ContactList(){
  return (
    <>
    <table className='contact-table'>
      <thead>
        <tr>
          <th>No</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Mobile_No</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody className='tbody-contact'>
        {userdata.map((contactdata,index)=>{
          return(
            <tr key={contactdata.id}>
            
              <td>{index+1}</td>
              <td>{contactdata.fullname}</td>
              <td>{contactdata.email}</td>
              <td>{contactdata.phone}</td>
              <td>{contactdata.message}</td>
            </tr>
            );
        })}
      </tbody>
    </table>
    </>
  )
}
export default ContactList;
