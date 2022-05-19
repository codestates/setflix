import React, { useState } from "react";
import axios from "axios";
import Movieevaluate from "../Component_Junehwan/Movieevaluate";
import Nav from "../Componet_Soonkyu/Nav";
import { useLocation } from "react-router";

export default function Postreview({ postReview, userInfo, thisMovie }) {
  console.log(thisMovie);
  const location = useLocation();
  const data = location.state.data; //링크를타고온 무비데이타

  const [movieReview, setMovieReview] = useState({
    user_id: userInfo.id,
    movie_id: data.id, //영화 아이디
    title: "",
    comment: "",
  });
  console.log(movieReview);
  const [myGrade, setMyGrade] = useState("");

  const handleInputValue = (key) => (e) => {
    setMovieReview({ ...movieReview, [key]: e.target.value });
  };

  const handlePostReview = () => {
    const { user_id, movie_id, title, comment } = movieReview;
    if (title === "" || comment === "") {
    } else {
      axios.post(`http://localhost:4000/setflix/reviews/`, { user_id, movie_id, title, myGrade, comment }, { withCredentials: true }).then((res) => postReview(res));
    }
  };

  return (
    <div>
      <Nav />
      <div className="first-component">
        <Movieevaluate data={data} />
      </div>
      <div className="second-component">
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <span>제목</span>
            <input className="movie-review-title" onChange={handleInputValue("title")} />
          </div>
          <div>
            <span>후기</span>
            <input className="movie-review-comment" onChange={handleInputValue("comment")} />
          </div>
          <div>
            <span>평점: *****</span>
          </div>
          <div className="button-height">
            <button className="btn" type="button" onClick={handlePostReview}>
              제출하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
