import React, { useEffect, useState } from 'react'
import './MainPost.css'
import axios from '../../axios'
import { img_Url } from '../../constants/constants'

function MainPost(props) {
const [movies,setState]=useState([])
  useEffect(()=>{
    axios.get(`${props.url}`).then((response)=>{
    
    setState(response.data.results)
    })
  })
  return (
    <div className='row'>
      <h2>{ props.title }</h2>
<div className="posters">
{movies.map((e)=>

  <img className={ props.isSmall ?"smallPoster":"poster"} src={`${img_Url+e.backdrop_path}`} alt="poster" />
  )}
  
</div>
    </div>
  )
}

export default MainPost
