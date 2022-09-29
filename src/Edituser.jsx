import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import axios from 'axios'

function Edituser() {
  const formik=useFormik({
    initialValues:{
      Name:"",
      Position:"",
      Office:"",
      Age:"",
      Startdate:"",
      Salary:""
    },
    validate:(values)=>{
      let error ={};
      if(values.Name===""){
        error.Name="*Please enter your name"
      }

      if(values.Position===""){
        error.Position="*Please enter your Position"
      }
      return error
    },
    onSubmit : async(values)=>{
      await axios.put(`http://localhost:5500/useredit/${params.id}`,values)
      navigate("/user")
      alert("user updated successfully")
    
    } });

    useEffect(()=>{
      loadUser()
    },[])
    const navigate =useNavigate()
    const params = useParams()
  
    let loadUser=async()=>{
      try{
        let user = await axios.get(`http://localhost:5500/home/${params.id}`)
        formik.setValues({
          Name:user.data.Name,
          Position:user.data.Position,
          Office:user.data.Office,
          Age:user.data.Age,
          Startdate:user.data.Startdate,
          Salary:user.data.Salary
        })
      }
      catch(error){}
    }





 
  return (
    <div className='container'>
    <form onSubmit={formik.handleSubmit}>
      <div className='row'>
        <div className='col-lg-6'>
          <label>Name</label>
          <input className='form-control' type={"text"}
          value={formik.values.Name}
          onChange={formik.handleChange}
          name="Name"
          ></input>
          <span style={{color:"red"}}>{formik.errors.Name}</span>
        </div>
        <div className='col-lg-6'>
          <label>Position</label>
          <input className="form-control" type={"text"}
          value={formik.values.Position}
          onChange={formik.handleChange}
          name="Position"></input>
          <span style={{color:"red"}}>{formik.errors.Position}</span>
        </div>
        <div className='col-lg-6'>
          <label>Office</label>
          <input className='form-control' type={"text"}
          value={formik.values.Office}
          onChange={formik.handleChange}
          name="Office"></input>
        </div>
        <div className='col-lg-6'>
          <label>Age</label>
          <input className='form-control' type={"text"}
          value={formik.values.Age}
          onChange={formik.handleChange}
          name="Age"></input>
        </div>
        <div className='col-lg-6'>
          <label>Startdate</label>
          <input className='form-control' type={"text"}
          value={formik.values.Startdate}
          onChange={formik.handleChange}
          name="Startdate"></input>
        </div>
        <div className='col-lg-6'>
          <label>Salary</label>
          <input className='form-control' type={"text"}
          value={formik.values.Salary}
          onChange={formik.handleChange}
          name="Salary"></input>
        </div>
        <div className='col-lg-6'>
          
          <input className='btn btn-primary mt-2' type={"submit"} disabled={!formik.isValid} value="submit"></input>
        </div>

      </div>
    </form>
    </div>
  )
}

export default Edituser