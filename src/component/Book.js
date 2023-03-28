import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



function Book({book,id,deleteButton,editButton}) {
    const rating={
        color:book.rating>=8?"green":"red"
    }
   const [show,setshow]=useState(true)
   const navigate =useNavigate();

  



  return (
    
        <div className="card"  >
  <img className="card-img-top" src={book.poster} alt={book.name}/>
  <div className="card-body">
    <h3 className="card-title">{book.name}-{id}</h3>
    <p style={rating}>⭐{book.rating}</p>
    </div> 
   <div>
    <button onClick={()=>setshow(!show)} className='toggel'>toggel</button>
    <button onClick={()=> navigate("/book/"+id)}>Play</button>
   {/* <p className="card-text" style={summary} >{book.summary}</p> */}
   {show?  <p className="card-text">{book.summary}</p>:""}
{deleteButton} {editButton}
    
  </div>
</div>

    
  )
}

export default Book