import React from 'react'
import DoctorNavbar from './DoctorNavbar'

const Doctorlayput = ({children}) => {
  return (
    <div><DoctorNavbar/>
    {children}
    </div>
  )
}

export default Doctorlayput