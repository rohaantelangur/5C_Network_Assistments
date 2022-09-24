import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const FollowersRepsList = () => {
  const {userName} = useParams()
  const [Data, setData] = useState([])
  const Navigater = useNavigate();

  axios.get(`https://api.github.com/users/${userName}/repos`)
    .then((res)=>{
    setData(res.data)
    console.log(res.data);
    }).catch((err)=>{
    console.log(err);
    })
  return (
    <>
    <h1 className='headLine'>{userName}'s Repos</h1>
    <div className='displayData'>
    {Data?.map((item, index) => (
        <div
        key={index}
          className="parent"
          >
          <div>
            <p> <samp style={{color:"red"}}> Name:-</samp> {item.name}</p>
            <p><samp style={{color:"red"}}> Description:-</samp> {item.description}</p>
          </div>
          <div>
          </div>
        </div>
      ))}
      </div>
      <div className='btnDiv'>
      <button className='btn'onClick={()=>Navigater("/")}>Home</button>
      </div>
      </>
  )
}
