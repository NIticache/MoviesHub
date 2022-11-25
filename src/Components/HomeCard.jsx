import { useState } from "react";
import Header from './Header'
import '../styles/global.css'
 

const HomeCard =(props)=>{
   
    return<>
    <div className="HomeCard">
        <div className="Home-grid-items">{props.name}</div>
    <div className="Home-grid-items">{props.go}</div>
        
    </div>
    </>
}
export default HomeCard;