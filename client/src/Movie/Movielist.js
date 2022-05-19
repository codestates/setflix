import axios from "axios";
import React, { useEffect, useState } from "react";
import './Movielist.css';
import Nav from '../Componet_Soonkyu/Nav';
import { Link } from "react-router-dom";

function Movielist({ isLogin }) {
    const [movieData, setMovieData] = useState([]);
    const imageUrl = "https://image.tmdb.org/t/p/";
    //const images = `${imageUrl}w500${Movie.photo}`

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

    return (
        <div className='movieall'>
            <Nav isLogin={isLogin}/>
            <div className='movie-container'>
                {movieData.map(Movie => (
                    <div>
                        제목 : {Movie.title}
                    <div className="movielist_image">
                        <img style={{ height: '600px' }} src={`${imageUrl}w780${Movie.photo}`} alt={Movie.id}/>
                    </div>
                    <div className="movielist">
                        <p>줄거리 : {Movie.description}</p>
                    </div>
                    <Link to='/postreview'>
            <button>후기 쓰기</button>
            </Link>
                    </div>    
                ))}
            </div>
        </div>
    )
}

export default Movielist;

/*
                    <List
                        id="2" title ="영화2"
                        image ="https://file2.nocutnews.co.kr/newsroom/image/2022/04/08/202204081311322351_0.jpg"
                        grade = {5}
                        review = "인생 최고의 명작" />
                        */