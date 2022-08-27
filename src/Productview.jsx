import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Productview() {
    const params=useParams()
    const [userdata,setUserData] = useState({})



 useEffect(()=>{
  loadUser1()
},[])

let loadUser1 = async()=>{
  try{
   let user = await axios.get(`https://630a16213249910032803b78.mockapi.io/shibin/${params.id}`)
   console.log(user.data)
   setUserData(user.data)
   
  }
  catch(error){
    alert(error.message)
  }
}
  return (
    <div class='container-fluid king'>
    <div class="card mx-auto col-lg-2">
        <img class='mx-auto img-thumbnail'
            src={userdata.image}
            width="auto" height="auto"/>
        <div class="card-body text-center mx-auto">
            <div class='cvp'>
                <h5 class="card-title font-weight-bold">{userdata.product}</h5>
                <p class="card-text">{userdata.price}</p>
                
</div></div></div>
                </div>


  )
}

export default Productview