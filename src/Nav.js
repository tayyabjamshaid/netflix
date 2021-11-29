import React,{useEffect,useState} from 'react'
import "./Nav.css"
export default function Nav() {
    const[show,handleShow]=useState(false)
    useEffect(()=>{
    window.addEventListener("scroll",()=>{
        if(window.scrollY>100){
            handleShow(true);
        }else handleShow(false);
    })
    return()=>{
        window.removeEventListener("scroll")
    }
    },[])
    return (
        // agr show true ha tu ye className b sath rkh du
        <div className={`nav ${show && "nav__black"}`}>
          <img className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="NetFlix Logo"/>
          <img src="./net.png" className="nav__avatar"/>  
        </div>
    )
}

