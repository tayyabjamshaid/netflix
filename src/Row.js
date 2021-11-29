
import React,{useState,useEffect} from 'react'
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"
import "./Row.css"
import axios from "./axios"

const base_url="https://image.tmdb.org/t/p/original/";
export default function Row({title,fetchUrl,isLargeRow}) {
    const [movie,setMovie]=useState([])
    const [trailerUrl,settrailerUrl]=useState("")
    useEffect(()=>{
 async function fetcHData(){
     const request=await axios.get(fetchUrl)
  
     setMovie(request.data.results)
     return request;
 }
 fetcHData()
    },[])

    //By default,opts has this in react-youtube documentation
        const opts={
        height:390,
    width:"100%",
playerVars:{
    autoplay:1
}    }

 
    
    const handleClick=(movie)=>{
        if (trailerUrl){
            settrailerUrl("")
        }else{
            movieTrailer(movie?.name || "").then((url)=>{
            const urlParams=new URLSearchParams(new URL(url).search);
            console.log(urlParams.get("v"))
            settrailerUrl(urlParams.get("v"))       
          
 
            }).catch((error)=>console.log(error))
        }}
    
    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row__posters">
               {
                   movie.map((movie)=>{
                       return(
                           <div>                                            
                            {/* ye condition is lye kyu k by default netflix ki phli row bari huti ha */}
                         <img key={movie.id} className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                           onClick={()=>handleClick(movie)}
                         src={`${base_url}${isLargeRow ? movie.poster_path :movie.backdrop_path}`} alt={movie.name}/>   
                           {/* ye condition is lye kyu k by default netflix ki nichli rows churai me bari huti ha,
                       is condition ko  is lye use kya ha */}  
                           </div>
                       )
                   })
               }
            </div>
         {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}   
        </div>
    )
}
