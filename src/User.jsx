import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
import { faFontAwesomeFlag } from '@fortawesome/free-solid-svg-icons';
import { fasolid } from '@fortawesome/free-solid-svg-icons';



function User() {
   const [users, setUsers] = useState([]);
   const [isloading,setLoading] =useState(false)
    
    useEffect(()=>{
        loadData()
       },[])
     
       let loadData = async() =>{
        setLoading(true)
      let users= await axios.get("https://62b7f3ac03c36cb9b7c0002d.mockapi.io/misham")
      console.log(users.data)
      setUsers(users.data)
      setLoading(false)
       }
let userDelete = async(id)=>{
 try{
    let ask = window.confirm("Are you sure")
    if(ask){
        await axios.delete(`https://62b7f3ac03c36cb9b7c0002d.mockapi.io/misham/${id}`) 
        loadData()
   
    }
    
    
 }
 catch(error){}
}

    // const data=[{
    //     id:1,
    // Name:"misham",
    //  Position:"manager",
    //  Office:"duncan",
    //  Age:"26",
    //  Startdate:"05/01/2022"
    //  Salary:"15800"
    // },{
    // id:2,
    // Name:"misham",
    // Position:"manager",
    // Office:"duncan",
    // Age:"26",
    // Startdate:"05/01/2022",
    // Salary:"15800"},{
    //     id:3,
    //     Name:"misham",
    // Position:"manager",
    // Office:"duncan",
    // Age:"26",
    // Startdate:"05/01/2022",
    // Salary:"15800"},{
    //     id:4,
    //     Name:"misham",
    // Position:"manager",
    // Office:"duncan",
    // Age:"26",
    // Startdate:"05/01/2022",
    // Salary:"15800"},{
    //     id:5,
    //     Name:"misham",
    // Position:"manager",
    // Office:"duncan",
    // Age:"26",
    // Startdate:"05/01/2022",
    // Salary:"6000"}]
  return (
    <div class="container-fluid">

<div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">User Table</h1>
                        <Link to="/portal/create-user" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i>Create User</Link>
                    </div>
   
    
{
    isloading ? 
        <div className='loader col-lg-12'><img className='img' src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831" alt="" /></div>
            :  <div class="card shadow mb-4">
    <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Data Tables</h6>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Salary</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
               {
                users.map((item,index)=>{
                    return(
                        
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.Name}</td>
                            <td>{item.Position}</td>
                            <td>{item.Office}</td>
                            <td>{item.Age}</td>
                            <td>{item.Startdate}</td>
                            <td>{item.Salary}</td>
                            <td>
<Link to={`/portal/user/${item.id}`} className='btn btn-sm btn-warning mr-1'>View</Link>
<Link to={`/portal/user/edit/${item.id}`} className='btn btn-sm btn-success  mr-1' >Edit</Link>
<button onClick={()=>{userDelete(item.id)}} className='btn btn-sm btn-danger  mr-1' >delete</button>
                            </td>
                        </tr>
                   
                    );
                })
               }
                </tbody>
            </table>
        </div>
    </div>
</div>

}
   
</div>
  )
}

export default User