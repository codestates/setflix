import axios from "axios";
import React, { useEffect, useState } from "react";
import Movielist from "../Movie/Movielist";
import { Link } from "react-router-dom";
import "./list.css";
import sampledata from "./sample.json";

function handleMovie() {
  const [movieData, setMovieData] = useState([]);
  const imageUrl = "https://image.tmdb.org/t/p/w154";

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://localhost:4000/setflix/movies").then((res) => setMovieData(res.data));
      const Movielist = res.movies.map((Movie) => ({
        title: Movie.title,
        image: Movie.photo,
        releasedAtL: Movie.releasedAt,
        description: Movie.description,
      }));
      setMovieData(movieData.concat(Movielist));
    }
    fetchData();
  }, []);

  console.log("movieDate", movieData);
  console.log("더미", sampledata);
  console.log("1값", movieData[1]);

  // console.log(movies);

  return (
    <div className="listall">
      {movieData.map((Movie) => (
        <div className="list_movie">
          <div className="list_title">
            title : {Movie.title}
            <p>description : {Movie.description}</p>
          </div>
          <img src={`${imageUrl}${Movie.photo}`} alt="My Image" />
        </div>
      ))}
      <Link to="/postreview">
        <button>후기 쓰기</button>
      </Link>
    </div>
  );
}

// <img className="list_image" src={Movie.photo} alt="">image :</img>
//`${imageUrl}{Movie.photo}` 이미지 url 불러오기

export default handleMovie;
