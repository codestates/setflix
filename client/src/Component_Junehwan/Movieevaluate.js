import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Movieevaluate({ data }) {
  // console.log(title)
  axios.get();

  return (
    <div className="information">
      <img className="movie-pic-small" src={data.image} />
      <div>영화 제목: {data.title}</div>
      <div>후기 {}개</div>
      <div>평점: {}</div>

      <Link to="/reviewlist">
        <div>후기 목록</div>
      </Link>

      <Link to="/postreview">
        <div>후기 작성</div>
      </Link>
    </div>
  );
}
