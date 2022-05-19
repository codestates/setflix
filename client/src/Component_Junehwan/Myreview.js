import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Myreview({ userInfo }) {
  const [myReviews, setMyReviews] = useState([{ movie_id: "", title: "", comment: "", updatedAt: "" }]); //영화정보도 필요하다.
  const [moviePhotos, setMoviePhotos] = useState({ id: "", photo: "" });

  useEffect(() => {
    axios.get(`http://localhost:4000/setflix/reviews/${userInfo.id}`).then((res) => setMyReviews(res.data));
    axios
      .get(`http://localhost:4000/setflix/movies`)
      .then((res) => res.data)
      .then((photo) => setMoviePhotos(photo));
  }, []);
  console.log(moviePhotos);
  console.log(myReviews);

  //   const review = myReviews.map();
  return (
    <div>
      {myReviews.length === 0 ? (
        <div>작성한 후기가 없습니다.</div>
      ) : (
        myReviews.map((review) => (
          <div key={review.id}>
            <img className="movie-pic" src={`https://image.tmdb.org/t/p/w92/8dzKn3RtPWUJRG9ymSpi423eMNV.jpg`} />
            {/* review.movie_id로 movie테이블이미지를가져와야한다. */}
            <div>{review.title}</div>
            <div>{review.comment}</div>
            <div>{review.updatedAt}</div>
            <div>
              <span>수정하기</span>
              <span>삭제하기</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
