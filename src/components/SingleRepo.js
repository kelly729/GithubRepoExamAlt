import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaUsers,FaFacebook,FaInstagram,FaTwitter,FaMoon,FaSun } from "react-icons/fa";



const SingleRepo = ({results}) => {
    const {id}=useParams()
  const newResult=results.find((res)=>res.node_id === id)
  console.log(newResult)
  return (
    <div>
      <div className='single-main'>
        <div className='sub-single'>
            <div className='img-sec'>
                <img src={newResult.owner.avatar_url} alt={newResult.node_id}></img>
                <h2>{newResult.name}</h2>
                <ul>
                <li> <FaTwitter/> </li>
            <li> <FaFacebook/> </li>
            <li> <FaInstagram/> </li>
                </ul>
                <div className='cont'>
                    <div className='cont-c'>
                        <article>{newResult.description}</article>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default SingleRepo
