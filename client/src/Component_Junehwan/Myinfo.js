import React, { useState, useEffect } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

export default function Myinfo({ isLogin, userInfo, handleLogout }) {
  const [myReviews, setMyReviews] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/setflix/reviews/${userInfo.id}`).then((res) => setMyReviews(res.data));
  }, []);

  console.log(myReviews);


  return (
    <div className='information'>
      <img src='data:image/png;base64,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' className="profile-pic" />
      <div>
        <span> 등급 </span>
        <span> 닉네임 {userInfo.nickname} </span>
      </div>
      <div> 내 후기 갯수 {myReviews.length}개 </div>

      <Link to="/mypage">
        <div> 후기 관리 </div>
      </Link>

      <Link to="/modify">
        <div> 회원 정보 관리 </div>
      </Link>

      <div>
        <Link to="/login">
          <button className="btn logout" onClick={handleLogout}>
            로그아웃
          </button>
        </Link>
      </div>
    </div>
  );
}
