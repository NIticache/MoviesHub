import Header from "./Header"
import TopMovieList from "./TopMovieList"
import Footer from "./Footer"
import Demo from "./Demo"
import SignUpPage from "./SignUpPage"
import { useNavigate} from 'react-router-dom';
// import bg from "../Images/bg"
import HomeCard from "./HomeCard"
import { Link } from "react-router-dom"
import BreadCrumb from "./BreadCrumb";
const HomePage =()=>{
 
    return<>
    <SignUpPage/>
    <BreadCrumb/>
    {/* <Header/> */}
    <div className="moviepage">
        <TopMovieList topic={"Movies"}/>
        <TopMovieList topic={"Series"}/>
{/* <HomeCard name={"Movies"} go={"==="}/>
<HomeCard name={"==="} go={"Series"}/> */}
</div>
<br/>
        <br/>
        <br/>
        <br/>
        <br/><br/>
        <br/>
        <br/>
        <br/>
<Footer/>
    </>
}

export default HomePage