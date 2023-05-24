import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from '../../axios'
import { api_Key, img_Url } from '../../constants/constants'

export default function Banner() {
  const [movie,setMovie] =useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${api_Key}&language=en-US`).then((response)=>{
      console.log(response.data.results[0]);
      setMovie(response.data.results[3])
    })
  },[])
  return (
    <div className='banner' style={{backgroundImage: `url(${movie ? img_Url+movie.backdrop_path :""})`}}>
      <div className="content">
        <h1 className="title">{movie ? movie.title :"hai"}</h1>
        <div className="bannerBtns">
            <button className='button'>Play</button>
            <button className='button'>My List</button>
        </div>
        <h1 className='description'>{movie ? movie.overview :"hai"}</h1>
      </div>
      <div className="fadeBottom"></div>
    </div>
  )
}
