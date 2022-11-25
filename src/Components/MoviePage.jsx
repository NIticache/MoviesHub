
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Header from'./Header';
import Footer from "./Footer";
import { useLocation } from 'react-router-dom';
const Moviepage = () => {
    const topic = useLocation();
    console.log(topic.state)
    const [data, setdata] = useState([])
useEffect(()=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '585c95d812msh2bb5655c97c350bp1c6d92jsn877b7b93574d',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    };
    
    fetch('https://imdb8.p.rapidapi.com/title/v2/find?title=game%20of&limit=20&sortArg=moviemeter%2Casc', options)
        .then(response => response.json())
        .then(response => setdata(response.results))
        .catch(err => console.error(err));
},[])
    

//     useEffect(() => {
//         console.log("Useeffect")
//         fetch("https://fakestoreapi.com/products").then(response => {
//             return response.json()
//         }).then(datas => {

// console.log(datas)
//             setdata(datas)
//         })
//     }, [])

    return <>
    <Header/>

    <div className="moviepage">
    <div  className="movielist"><div> {topic.state.head}</div></div>
        <div className="grid-container">
            {data.map((item) => {
                console.log(item)
                return (

                    <MovieCard key={item?.id} title={item?.title} img={item?.image?.url} year={item?.year} titletype={item?.titleType} />
                )
            })}
        </div>
        </div>
        <br/><br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Footer/>
    </>
}

export default Moviepage;