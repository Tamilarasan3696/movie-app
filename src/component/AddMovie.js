import React from 'react';
import { API } from './global';
import { useNavigate } from 'react-router-dom';
import {TextField,Button} from '@mui/material';
import {useFormik} from 'formik';
import * as yup from "yup";

const  validationSchema = yup.object({
   name: yup
    .string('Enter the book name')
    .required('Email is required'),
    poster: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Poster is required'),
    summary: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('summary is required'),
    trailer: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('trailer is required'),
    
  rating: yup
    .number()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
   
 

});
  
  


function AddMovie({bookList,setBookList}) {
  const navigate= useNavigate();
   
    const formik=useFormik({
      initialValues:{
      name:"",
      poster:"",
      summary:"",
      trailer:"",
      rating:"",
       id:"",},
      ValidationSchema:validationSchema,
      onSubmit:(newMovie)=>{
       console.log("onSubmit",newMovie)
       
          creatMovie(newMovie);
      }

  })

  const  creatMovie=(newMovie)=>{
    console.log("creatMovie",newMovie)
    fetch(`${API}/book`,{
      method:"POST",
      body:JSON.stringify(newMovie),
        headers:{"content-Type":"application/json"},})
        .then((data)=>data.json())
        .then(()=>navigate("/movie"))
        setBookList(...bookList,newMovie)

  }



    
  return (
    <form  onSubmit={formik.handleSubmit} className='addbook'>
        <TextField className="filled-basic" 
          id="name"
          name="name"
           type="name"
           lable="name"
            placeholder="name"
            value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
           /><br/>
         <TextField
          className="filled-basic"
          id="summary"
          name="summary"
           type="summary"
           lable="summary"
            placeholder="summary"
            value={formik.values.summary}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.summary && Boolean(formik.errors.summary)}
          helperText={formik.touched.summary && formik.errors.summary}
             /><br/>
         <TextField className="filled-basic" 
         id="rating"
         name="rating"
          type="rating"
           placeholder="rating"
           lable="rating"
           value={formik.values.rating}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
          error={formik.touched.rating && Boolean(formik.errors.rating)}
          helperText={formik.touched.rating && formik.errors.rating}/><br/>
         <TextField className="filled-basic" 
          id="trailer"
          name="trailer"
           type="trailer"
            placeholder="trailer"
            lable="trailer"
            value={formik.values.trailer}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} 
           error={formik.touched.trailer && Boolean(formik.errors.trailer )}
          helperText={formik.touched.trailer  && formik.errors.trailer }/><br/>
         <TextField className="filled-basic"
           id="poster"
           name="poster"
            type="poster"
             placeholder="poster"
             lable="poster"
             value={formik.values.poster}
           onChange={formik.handleChange}
           onBlur={formik.handleposter }
            error={formik.touched.poster && Boolean(formik.errorsposter)}
          helperText={formik.touched.poster && formik.errors.poster}/><br/>
          
         
         <TextField className="filled-basic" 
          id="id"
          name="id"
           type="id"
            placeholder="id"
            lable="id"
            value={formik.values.id}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} 
           error={formik.touched.id && Boolean(formik.errors.id )}
          helperText={formik.touched.id  && formik.errors.id }/><br/>
        <Button  type="submit" onClick={creatMovie}>Add Movie</Button>
    </form>
  )
}

export default  AddMovie
