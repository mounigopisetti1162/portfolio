import React from 'react'
import '../scss/contact.scss'
import * as Yup from "yup";
import { useState } from "react";
import '../scss/about.scss'

import '../scss/style.scss'
import resume from '../resume/Resume.pdf'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';

import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";

// const {values}=useFormik

const Contact = () => {

  const [status,setstatus]=useState('submit')
//   const navigate=useNavigate()

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required(),
    email: Yup.string().email().required(),
    text: Yup.string().required(),
    phone:Yup.number().required()
  });

  const initialValues = {
    firstname: "",
    text: "",
    email: "",
    phone:""
    
  };
  const onSubmit=(values)=>{
    sendmail(values)
    console.log(values)
    
  }
function sendmail(values)
{
  var params={
    from_name:values.firstname,
    email_id:values.email,
    phone:values.phone,
    message:values.text

  }
  emailjs.send("service_dnllpmn","template_35v58qb",params,"mVDvcwbb8A2GV8aT1").then((res)=>
    alert('mail sent sucessfully'))
  
}
  
    const renderError = (message) => <p className="help is-danger">{message}</p>;
  
    ScrollReveal({
      reset:true,distance:'60px',duration:2500,delay:400
      })
      ScrollReveal().reveal('.container',{delay:300,origin:'left'})

      ScrollReveal().reveal('.abouts',{delay:400,origin:'bottom'})
      // ScrollReveal().reveal('.contact',{delay:100,origin:'top'})
  return (
    <>
    <div>
    

    <div className='container'>
    <h1 className='contact'>Contact Me Here😊</h1>
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={values => {
        onSubmit(values);
       console.log(values)
     }}
    
  >
    <div>
      <Form>
        <div
          className="container2"
          style={{
            width: "60%",
          }}
        >
          <div className="field">
            <label className="label" htmlFor="firstname">
              Full name
            </label>
            <div className="control">
              <Field
                name="firstname"
                type="text"
                className="input"
                placeholder="Full name"
              />
              <ErrorMessage name="firstname" render={renderError} />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="email">
              Email address
            </label>
            <div className="control">
              <Field
                name="email"
                type="text"
                className="input"
                placeholder="Email address"
              />
              <ErrorMessage name="email" render={renderError} />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="phone">
              Phone Number
            </label>
            <div className="control">
              <Field
                name="phone"
                type="text"
                className="input"
                placeholder="Full name"
              />
              <ErrorMessage name="phone" render={renderError} />
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="text"> Querie</label>
            <Field name="text"
                type="text area"
                className="input"
                placeholder="Enter needful"cols="50" rows="5"></Field>
            
            <div className="control">
             
              <ErrorMessage name="text" render={renderError} />
            </div>
          </div>
      
         
          <br></br>
          <button type="submit" className="btn btn-primary" 
          >
            Submit
          </button>
          <br></br>

        </div>
      </Form>
      <br></br>
      <div className='icons'>
  <div className='icon'>
    <a href='https://github.com/mounigopisetti1162' target='_blank'>
  <GitHubIcon sx={{ color: 'white', fontSize: 50 }} /></a>
  <a href='https://www.linkedin.com/in/mouni-chinni-973712171/' target='_blank'>
  <LinkedInIcon sx={{ color: 'white', fontSize: 60 }}/> </a>
  <a href={resume} download='resume'>
  <FolderSpecialIcon sx={{ color: 'white', fontSize: 60 }}/></a>
   </div>
  
</div>
      </div>
      
      </Formik>
      </div>
     
      </div>
      </>
     
    
  )
};

export default Contact