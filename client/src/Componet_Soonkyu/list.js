import axios from "axios";
import React, { useEffect, useState } from "react";
import Movielist from "../Movie/Movielist";
import './list.css';
import sampledata from "./sample.json";


function handleMovie( ) {
    const [movieData, setMovieData] = useState([]);
    const imageUrl = "https://image.tmdb.org/t/p/w94";

    useEffect( () => {
        async function fetchData() {
            const res = await axios.get("http://localhost:4000/setflix/movies")
            .then((res) => setMovieData(res.data))
            const Movielist = res.movies.map((Movie) => (
                {
                    title: Movie.title,
                    image: Movie.photo,
                    releasedAtL: Movie.releasedAt,
                    description: Movie.description
                })
            )
            setMovieData(movieData.concat(Movielist))
        } fetchData();
    },[])
    
    console.log("movieDate", movieData);
    console.log("더미", sampledata);
    console.log("1값", movieData[1]);
    
    // console.log(movies);

    return (
        <div className="listall">
                {movieData.map(Movie => (
                    <div className="list_movie">
                        <div className="list_title">
                            title : {Movie.title}
                            <p>description : {Movie.description}</p>
                        </div>
                        `${imageUrl}{Movie.photo}`
                    </div>
                ))}
        </div>
    )
}
// <img className="list_image" src={Movie.photo} alt="">image :</img>
//`${imageUrl}{Movie.photo}` 이미지 url 불러오기

export default handleMovie;

/*
            <div>
                {movieData.map(dd => (
                    <handleMovie key ={movieData.title}/>
                ))}
            </div>

            <div className="list_info">
                <p><img src={image} alt=""/></p>
                <span>영화이름 : {title}</span>
            </div>
            <div className="list_rating">
                <span>평점 : </span>
                {
                    Array(grade)
                        .fill()
                        .map((_, i) => (
                            <span>★</span>
                        ))
                }
            </div>
            <div className="list_review">
                <span>후기 : {review}</span>
            </div>
            <button>후기 쓰기</button>
            <p></p>
        </div>
    );
}

/*                 <img className='movie-img' 
                src="https://t1.daumcdn.net/cfile/tistory/997473445CACC98309"
                alt="movie1"/>
                */


/*     useEffect(() => {
        async function fetchData() {
        const result = await axios.get("http://localhost:4000/setflix/movies")

        fetch(result)
            .then(response => response.json())
            .then(response => {
                console.log(response.moives)
                setMoiveData([response.results])
            })
        } fetchData();
    }, [])
    */