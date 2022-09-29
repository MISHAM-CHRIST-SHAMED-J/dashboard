import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

function Login(){
    const navigate= useNavigate()
    const formik=useFormik({
      initialValues:{
       email:"",
        password:""
       
      },
      validate:(values)=>{
        let error ={};
        if(values.email===""){
          error.email="*Please enter your Email"
        }
  
        if(values.password===""){
          error.password="*Please enter your Password"
        }
        return error
      },
      onSubmit : async(values)=>{
     try {
        let data= await axios.post("http://localhost:5500/loginusr",values)
        if(data.status==200){
          window.localStorage.setItem("appToken",data.data.token)
          navigate("/portal/welcome")
                  }
     } catch (error) {
      alert(error.response.data.msg)
     }
      }
    })

    return(
        <div className='wrapperlogin'>
  
        <div className='col-lg-4'>
        <h2 className='text-center text-info mb-5'>WELCOME TO ADMIN PAGE</h2><br />

        <div class="tab-content">
          <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
           
          <form onSubmit={formik.handleSubmit}>
        
          
        
              <div class="form-outline mb-4">
              <label>Email</label>
          <input className='form-control' type={"text"}
          value={formik.values.email}
          onChange={formik.handleChange}
          name="email"
          ></input>
          <span style={{color:"red"}}>{formik.errors.email}</span>
              </div>
        
              <div class="form-outline mb-4">
              <label>Password</label>
          <input className='form-control' type={"password"}
          value={formik.values.password}
          onChange={formik.handleChange}
          name="password"
          ></input>
          <span style={{color:"red"}}>{formik.errors.password}</span>
              </div>
        
              <div class="row mb-4">
                <div class="col-md-6 d-flex justify-content-center">
                  
                </div>
        
                <div class="col-md-6 d-flex justify-content-center">
                  <a href="#!">Forgot password?</a>
                </div>
              </div>
        <div className='btnlogin'>
          <input className='btn btn-primary mb-4 mt-2' type={"submit"} disabled={!formik.isValid} value="submit"></input>
              </div>
        
              <div class="text-center">
                <p>Not a member? <a href="#!">Register</a></p>
              </div>
              </form>
          </div>
         
        </div>
        </div>
        
        </div>
    )
}

export default Login;