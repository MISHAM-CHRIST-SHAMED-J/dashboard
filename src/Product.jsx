import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';




function Product() {
const [product1,setProduct1]=useState([]);

useEffect(()=>{
  loadData()
})
  
const loadData =async()=>{
let user = await axios.get("https://630a16213249910032803b78.mockapi.io/shibin")
console.log(user.data)
setProduct1(user.data)
}

const deleteProduct=async(id)=>{
  try{
    let ask = window.confirm("Are you sure")
    if(ask){
        await axios.delete(`https://630a16213249910032803b78.mockapi.io/shibin/${id}`) 
        loadData()
   
    }
    
    
 }
 catch(error){}
}



  return (
    <div class='container-fluid king'>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Product Table</h1>
                        <Link to="/Creatpro" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i>Create Product</Link>
                    </div>
    {
      product1.map((item)=>{
        return(
        
         
         
           
          <div class="card mx-auto col-lg-2">
              <img class='mx-auto img-thumbnail'
                  src={item.image}
                  width="auto" height="auto"/>
              <div class="card-body text-center mx-auto">
                  <div class='cvp'>
                      <h5 class="card-title font-weight-bold">{item.product}</h5>
                      <p class="card-text">{item.price}</p>
                      <Link to={`/product/${item.id}`} class="btn details px-auto">View</Link><br />
                      <Link to={`/product/edit/${item.id}`} class="btn cart px-auto">Edit</Link>
                      <button onClick={()=>{deleteProduct(item.id)}}>Delete</button>
      
                      </div>
             
          </div>
          </div>
        
        );
      })
    }
</div>
   
  )
}

export default Product