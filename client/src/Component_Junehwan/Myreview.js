import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Myreview({ userInfo }) {
  const [myReviews, setMyReviews] = useState([{ title: "", comment: "", updatedAt: "" }]);

  useEffect(() => {
    axios.get(`http://localhost:4000/setflix/reviews/${userInfo.id}`).then((res) => setMyReviews(res.data));
  }, []);

  console.log(myReviews);

  //   const review = myReviews.map();
  return (
    <div>
      {myReviews.length === 0 ? (
        <div>작성한 후기가 없습니다.</div>
      ) : (
        myReviews.map((review) => (
          <div key={review.id}>
            <img className="movie-pic" />
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
