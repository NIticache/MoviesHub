
import React, { useState } from "react"
import "../styles/global.css"
import logo from "../Images/logo.svg"
import { useNavigate} from 'react-router-dom';

const Header = () => {
    const navigate=useNavigate();
    const handleclickmovie = () => {
        navigate('/movies',{state:{head:"Movies"}});

    }
    const handleclickseries = () => {
        navigate('/series',{state:{head:"Series"}});

    }
  
  return (
    <>
   <header className="header">
    <div className="movielogo">Movie Logo</div>
    <nav className="nav__links " >
        <ul>
            <li><a href='home'>Home</a></li>
            <li><a onClick={handleclickmovie}>Movies</a></li>
            <li><a onClick={handleclickseries}>Series</a></li>
            
        </ul>
    </nav>
    <div className="bell">Help
    
    </div>
    
   </header>
   <hr style={{"color":"#262626","padding":"0px","margin":"-1px","width":"100%","height":"7px","background":"#262626"}}/>
   {/* <hr style="widht:100%; height:7px; color:#262626; background-color:#262626; margin-top:-1px"/> */}
    </>
  )
}

export default Header
