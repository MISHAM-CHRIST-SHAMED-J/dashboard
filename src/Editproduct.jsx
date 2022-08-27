import React from 'react'
import { useEffect } from 'react'
import { useFormik } from 'formik'
import { useNavigate, useParams,} from 'react-router-dom'
import axios from 'axios'

function Editproduct() {

  const formik=useFormik({
    initialValues:{
      product:"",
      price:"",
      image:""
    },
    validate:(values)=>{
      let error ={};
      if(values.product===""){
        error.product="*Please enter your name"
      }

      if(values.price===""){
        error.price="*Please enter your Position"
      }
      return error
    },
    onSubmit : async(values)=>{
      await axios.put(`https://630a16213249910032803b78.mockapi.io/shibin/${params.id}`,values)
           alert("user updated successfully")
           navigate("/product")
    
    } });

    useEffect(()=>{
      loadUser()
    },[])
    const navigate =useNavigate()
    const params = useParams()
  
    let loadUser=async()=>{
      try{
        let user = await axios.get(`https://630a16213249910032803b78.mockapi.io/shibin/${params.id}`)
        formik.setValues({
          product:user.data.product,
          price:user.data.price,
          image:user.data.image,
          
        })
      }
      catch(error){}
    }






  return (
    <div className='container'>
    <form onSubmit={formik.handleSubmit}>
      <div className='row'>
        <div className='col-lg-6'>
          <label>product</label>
          <input className='form-control' type={"text"}
          value={formik.values.product}
          onChange={formik.handleChange}
          name="product"
          ></input>
          <span style={{color:"red"}}>{formik.errors.product}</span>
        </div>
        <div className='col-lg-6'>
          <label>price</label>
          <input className="form-control" type={"text"}
          value={formik.values.price}
          onChange={formik.handleChange}
          name="price"></input>
          <span style={{color:"red"}}>{formik.errors.price}</span>
        </div>
        <div className='col-lg-6'>
          <label>image</label>
          <input className='form-control' type={"url"}
          value={formik.values.image}
          onChange={formik.handleChange}
          name="image"></input>
        </div>
      
        

        <div className='col-lg-6'><br></br>
          
          <input className='btn btn-primary mt-2' type={"submit"} disabled={!formik.isValid} value="submit"></input>
        </div>

      </div>
    </form>
    </div>
  )
}

export default Editproduct;