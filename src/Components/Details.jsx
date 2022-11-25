import React from "react";
import Demo from "./Demo"
import { useLocation } from 'react-router-dom';
import{ useNavigate} from 'react-router-dom'
import Footer from "./Footer";
import { Link } from 'react-router-dom'
import Header from "./Header";
import "../styles/global.css"

const Details = () => {
const navigate=useNavigate();
    const data = useLocation();
    const handleclick=()=>{
navigate(-1)
    }
    console.log(data.state)
    return <>
    <Header/>
        <div className="details">
            <div className="detailsdiv">
                <img className="detailsposter" src={data.state.img} alt="DemoImg" />
                
            </div>
         
            
            {/* <div className="detailsinfo">

        </div> */}
            <div className="title">
                <div> <span className="detailstopic"> Title  :   </span>{data.state.title}</div>
             <div><span className="detailstopic"> Year   :   </span>{data.state.year}</div> 
             <div><span className="detailstopic"> Type   :   </span>{data.state.titletype}</div> 
             <div style={{color:"black",fontWeight:"bold"}}> Story  :   </div>
             <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
             
        
            
             
             </div>
             <div className="back">
                             <button className="click" onClick={handleclick} >Back</button>
                             </div>


        </div>
        <br/>
        <br/>
        <br/>
        <br/><br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Footer/>
    </>
}
export default Details;