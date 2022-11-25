import { useNavigate} from 'react-router-dom';
import "../styles/global.css"
const BreadCrumb=()=>{
    const navigate=useNavigate();
    const handleclickmovie = () => {
        navigate('/movies',{state:{head:"Movies"}});

    }
    const handleclickseries = () => {
        navigate('/series',{state:{head:"Series"}});

    }
    return<>
    <div className="BreadCrumb" > <div className="BreadCrumb-Items" onClick={handleclickmovie}> Movies</div>
    <div className="BreadCrumb-Items" onClick={handleclickseries}>Series</div></div>
    </>
}

export default BreadCrumb;