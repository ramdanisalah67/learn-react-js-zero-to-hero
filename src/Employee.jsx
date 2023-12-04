import React from 'react'
import './Employee.css';
import Info from './Info';

function Employee() {
    let user = {
        name :"salah",
        age:25
    }
  return (
  <>  <div className='emp'>my name is {user.name} i'm employee on Microsoft </div>
  </>
  )
}

export default Employee