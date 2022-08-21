import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import axios from 'axios'


function Userview() {
    const params=useParams()
    const [userdata,setUserData] = useState({})
useEffect(()=>{
  loadUser()
},[])

let loadUser = async()=>{
  try{
   let user = await axios.get(`https://62b7f3ac03c36cb9b7c0002d.mockapi.io/misham/${params.id}`)
   console.log(user.data)
   setUserData(user.data)
   
  }
  catch(error){
    alert(error.message)
  }
}
  return (
    <div>
<h3>{userdata.Name}</h3>
<h3>{userdata.Position}</h3>
<h3>{userdata.Age}</h3>
<h3>{userdata.Office}</h3>
<h3>{userdata.Startdate}</h3>
<h3>{userdata.Salary}</h3>

    </div>
  )
}

export default Userview