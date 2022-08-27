import { useFormik } from 'formik'
import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Createuser() {
  const navigate= useNavigate()
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
    await axios.post("https://630a16213249910032803b78.mockapi.io/misham",values)
     alert("User Credential")
     navigate("/user")

    }
  })
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

export default Createuser