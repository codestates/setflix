import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Mypage from "../UserInOut/Mypage";

export default function Myinfo({ userinfo, handleLogout }) {
  return (
    <div>
      <img className="profile-pic" />
      <div>
        <span> 등급 </span>
        <span> 닉네임 {userinfo.nickname} </span>
      </div>
      <div> 내 후기 갯수 {}개 </div>
      <div> 팔로워 수 {}명 </div>

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
