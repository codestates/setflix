import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './list.css';
import sampledata from "./sample.json";
import GridCards from "./GridCards";
import { Row } from 'antd';

function handleMovie( ) {
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
    
    console.log("movieDate", movieData);
    console.log("더미", sampledata);
    console.log("1값", movieData[1]);
    console.log("URL", imageUrl);

    
    // console.log(movies);

    return (
        <div className="listall" style={{ width: '85%', margin: '1rem auto'}}>
            <Row gutter={[16, 16]}>
                {movieData && movieData.map((Movie, index) => (
                    <React.Fragment key={index}>
                            <GridCards
                                image={`${imageUrl}w500${Movie.photo}`}
                                title={Movie.title}
                                movieid={Movie.id}
                            />
                    </React.Fragment>
                ))}           
            </Row>
        </div>
    )
}

export default handleMovie;

/*
        <div className="listall">
                {movieData.map(Movie => (
                    <div className="list_movie">
                        <div className="list_image>">
                            <Link to='/postreview'><img src={`${imageUrl}w500${Movie.photo}`} alt={Movie.id}/></Link>
                        </div>
                        <div className="list_title">
                            title : {Movie.title}
                            <p>description : {Movie.description}</p>
                        </div>
                    </div>
                ))}           
            */
