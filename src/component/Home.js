import React from 'react';
import Slider from "react-slick";
import {API} from './global';
import { useState,useEffect} from 'react';






function Home() {
  const[movielist,setMovielist]=useState([]);

    

  useEffect(()=> {fetch(`${API}/book`,{     
    method:"GET",
  })
.then((data)=>data.json())
.then((bk)=>{setMovielist(bk)})
   },[]);


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <div>
      <div>
     
    <Slider {...settings}>
        {movielist.map((movie,index)=>(<div className='Banner'>
        <iframe width="100%" height="514" src={movie.trailer} title="you tube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          
          </div>))}
        </Slider>
        </div>

        
        </div>
  )
}

export default Home