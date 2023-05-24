import React, { useEffect, useState } from 'react'
import './MainPost.css'
import axios from '../../axios'
import { api_Key, img_Url } from '../../constants/constants'
import Youtube from 'react-youtube'

function MainPost(props) {
const [movies,setState]=useState([])
const [urlId,setUrlId]=useState('')

  useEffect(()=>{
    axios.get(`${props.url}`).then((response)=>{
    
    setState(response.data.results)
    })
  })
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
const handleMovie=(id)=>{

axios.get(`/movie/${id}/videos?api_key=${api_Key}&language=en-US`).then((response)=>{
  if(response.data.results.length!==0){
    setUrlId(response.data.results[0])
  }

  
})

}
  return (
    <div className='row'>
      <h2>{ props.title }</h2>
<div className="posters">
{movies.map((e)=>

  <img onClick={()=>handleMovie(e.id)} className={ props.isSmall ?"smallPoster":"poster"} src={`${img_Url+e.backdrop_path}`} alt="poster" />
  )}
  
</div>
{ urlId && <Youtube videoId={urlId.key} opts={opts}  />}
    </div>
  )
}

export default MainPost
