import "../styles/global.css"
import {Link, useNavigate} from 'react-router-dom';

const MovieCard = (props) => {
    const navigate=useNavigate();
    const handleclick = () => {
        navigate('/details',{state:props});

    }
 
    return <>
    
        <div className="Card" onClick={handleclick} style={{
            
            background: `url(${props.img}) center`
          }}>
            <div className="poster">
                {/* <img className="poster" src={props.img} alt="DemoImg" /> */}
            </div>
            <div className="moviename">{props.title}
            </div>
            <div>Year: <span className="ratingvalue"> {props.year}</span> </div>
        </div>
        


    </>
}
export default MovieCard;