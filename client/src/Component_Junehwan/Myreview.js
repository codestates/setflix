import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Myreview({ userInfo }) {
  const [myReviews, setMyReviews] = useState([{ movie_id: "", title: "", comment: "", updatedAt: "" }]); //영화정보도 필요하다.
  const [moviePhotos, setMoviePhotos] = useState({ id: "", photo: "" });

  useEffect(() => {
    axios.get(`http://localhost:4000/setflix/reviews/${userInfo.id}`).then((res) => setMyReviews(res.data));
  }, []);
  console.log(moviePhotos);
  console.log(myReviews);

  // const time = []
  // for (let i = 0; i < myReviews.length; i++) {
  //   time.push(myReviews[i].updatedAt.split('T')[0] + ' ' + myReviews[i].updatedAt.split('T')[1].split('.')[0])
  // }

  // for (let i = 0; i < myReviews.length; i++) {
  //   myReviews[i].updatedAt = time[i]
  // }

  //   const review = myReviews.map();
  return (
    <div>
      {myReviews.length === 0 ? (
        <div>작성한 후기가 없습니다.</div>
      ) : (
        myReviews.map((review) => (
          <div className="component-border" key={review.id}>
            <img className="movie-pic" />
            <div>리뷰 제목: {review.title}</div>
            <div>리뷰 내용: {review.comment}</div>
            <div>작성 시간: {review.updatedAt}</div>
            <div>
              <span className="comment-edit">수정하기</span>
              <span className="comment-edit">삭제하기</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
