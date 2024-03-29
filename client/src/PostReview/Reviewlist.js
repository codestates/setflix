import React, { useState, useEffect } from "react";
import axios from "axios";
import Movieevaluate from "../Component_Junehwan/Movieevaluate";
import Nav from "../Componet_Soonkyu/Nav";
import { useLocation } from "react-router";

export default function Reviewlist({ isLogin, userInfo }) {
  const [myReviews, setMyReviews] = useState([{ title: "", comment: "", updatedAt: "" }]);
  const location = useLocation();
  const data = location.state.data; //링크를타고온 무비데이타

  useEffect(() => {
    axios.get(`http://localhost:4000/setflix/reviews/${userInfo.id}`).then((res) => setMyReviews(res.data));
  }, []);

  console.log(myReviews);

  return (
    <div>
      <Nav isLogin={isLogin} />
      <div className="first-component">
        <Movieevaluate data={data} />
      </div>
      <div className="second-component-rightbar">
        <div>
          <div className="first-font">Best 후기</div>
          <div>
            {myReviews.length === 0 ? (
              <div>작성한 후기가 없습니다.</div>
            ) : (
              myReviews.map((review) => (
                <div className="component-border" key={review.id}>
                  <img className="movie-pic" />
                  <div>{review.title}</div>
                  <div>{review.comment}</div>
                  <div>{review.updatedAt}</div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="third-component">
        <div>
          <div className="first-font">최신 후기</div>
          <div>
            {myReviews.length === 0 ? (
              <div className="component-border">작성한 후기가 없습니다.</div>
            ) : (
              myReviews.map((review) => (
                <div className="component-border" key={review.id}>
                  <img className="movie-pic" />
                  <div>{review.title}</div>
                  <div>{review.comment}</div>
                  <div>{review.updatedAt}</div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
