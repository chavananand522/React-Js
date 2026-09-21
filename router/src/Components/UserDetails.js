import React from 'react'
import { useParams } from 'react-router-dom'


const UserDetails = () => {
    const prarams = useParams();
    const userid=prarams.userid;
  return (
    <div>
        <h1>Details of User : {userid}</h1>
    </div>
  )
}

export default UserDetails