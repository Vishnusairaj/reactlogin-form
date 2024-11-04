import React from 'react'

import App from '../App'
import * as yup from "yup";
import { useFormik } from 'formik'

const Forms = () => {

    const formik=useFormik({
        initialValues:{
            username:'',
            password:'',
            age:'',
            email:'',
            mobileno:''
    
   },
   validationSchema:yup.object({
    username:yup.string().required('Name Required').min(4,'Name to short'),
   
    age:yup.number().required('Age Required').min(15,'Age min 15').max(30,'Age max 30'),
    email:yup.string().required(),
    mobileno:yup.string().required("Mobile number required").matches(/\+91\d{10}/,'invalid Mobile')

   }),
   onSubmit:(user)=>{
    console.log(user)
   }
});

  return (
    <div className='login-img'>
        <form className='container' onSubmit={formik.handleSubmit}>
            <dl className='form-box'>
                <dt>User Name</dt>
                <dd><input type="text" placeholder='username' onChange={formik.handleChange} name="username"/></dd>
                <dd>{formik.errors.username}</dd>
                <dt>Password</dt>
                <dd><input type="password" placeholder='password' onChange={formik.handleChange} name="password"/></dd>
                <dd>{formik.errors.password}</dd>
                <dt>Age</dt>
                <dd><input type="number"placeholder='age' onChange={formik.handleChange} name="age"/></dd>
                <dd>{formik.errors.age}</dd>
                <dt>email</dt>
                <dd><input type="email" placeholder='email' onChange={formik.handleChange} name="email"/></dd>
                <d></d>
                <dt>Phone Number</dt>
                <dd><input type="string" placeholder='phone no' onChange={formik.handleChange} name="mobileno"/></dd>
                <dd>{formik.errors.mobileno}</dd>
                <button type="submit">Submit</button>
            </dl>
            
        </form>
        

      
    </div>
  )
}

export default Forms
