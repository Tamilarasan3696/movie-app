import React from 'react'
import {TextField,Button} from '@mui/material';
import { useState,useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import {API} from './global';


function Edit() {
  
const [book,setBook]=useState(null)
const {bookid}= useParams();
    
  useEffect(()=> 
  {fetch(`${API}/book/${bookid}`,{     
    method:"GET",
  })
.then((data)=>data.json())
.then((bk1)=>{setBook(bk1)})
   },[]);
  
    return(
    
      book    ? <EditForm book={book}/>: "loading......"
  
        
    )
}




function EditForm({book}) {
    const [name,setName]=useState(book.name);
    const [poster,setPoster]=useState(book.poster);
    const [rating,setRating]=useState(book.rating);
    const [summary,setSummary]=useState(book.summary);
    const[trailer,setTrailer]=useState(book.trailer);
    const navigate= useNavigate();
  return (
    <div className='editForm'>
         <TextField className="filled-basic" label="NAME" value={name} variant="filled" onChange={(e)=>setName(e.target.value)} /> <br/>
         <TextField className="filled-basic" label="Summary" value={summary}   variant="filled" onChange={(e)=>setSummary(e.target.value)} /> <br/>
         <TextField className="filled-basic" label="rating" value={rating} variant="filled"  onChange={(e)=>setRating(e.target.value)}/> <br/>
         <TextField className="filled-basic" label="trailer" value={trailer} variant="filled"  onChange={(e)=>setTrailer(e.target.value)} /> <br/>
         <TextField className="filled-basic" label="poster" value={poster} variant="filled" onChange={(e)=>setPoster(e.target.value)}  /><br/>
         <Button variant="contained" color="success" className='btn'
         onClick={()=>{
            const updateBook={
                name:name,
                poster:poster,
                rating:rating,
                summary:summary,
                trailer:trailer
            };
             fetch(`${API}/book/${book.id}`,{
              method:"PUT",
              body:JSON.stringify(updateBook),
                headers:{"content-Type":"application/json"},})
                .then((data)=>data.json())
                .then(()=>navigate("/movie"))
             }
            }
         
         >SAVE</Button>
    </div>
  )

  
}

export default Edit