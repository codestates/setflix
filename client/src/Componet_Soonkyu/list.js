import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./list.css";
import GridCards from "./GridCards";
import { Row } from 'antd';

function handleMovie({ isLogin }) {
  const [movieData, setMovieData] = useState([]);
  const imageUrl = "https://image.tmdb.org/t/p/";
  //const images = `${imageUrl}w500${Movie.photo}`

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://localhost:4000/setflix/movies").then((res) => setMovieData(res.data));
      const Movielist = res.movies.map((Movie) => ({
        id: Movie.id,
        title: Movie.title,
        image: Movie.photo,
        releasedAtL: Movie.releasedAt,
        description: Movie.description,
      }));
      setMovieData(movieData.concat(Movielist));
    }
    fetchData();
  }, []);

  return (
    <div className="listall" style={{ width: "85%", margin: "1rem auto" }}>
      <Row gutter={[16, 16]}>
        {movieData &&
          movieData.map((Movie, index) => (
            <React.Fragment key={index}>
              <GridCards image={`${imageUrl}w185${Movie.photo}`} title={Movie.title} movieid={Movie.id} isLogin={isLogin} />
            </React.Fragment>
          ))}
        <Link to="/postreview">
          <button>후기 쓰기</button>
        </Link>
      </Row>
    </div>
  );
}

export default handleMovie;

