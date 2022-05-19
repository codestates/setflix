import React, { useState } from "react";
import Myinfo from "../Component_Junehwan/Myinfo";
import Myreview from "../Component_Junehwan/Myreview";
import Nav from "../Componet_Soonkyu/Nav";

export default function Mypage ({ isLogin, userInfo, handleLogout }) {
  return (
    <div>
      <Nav userInfo={userInfo} isLogin={isLogin}/>
      <div className="first-component">
        <Myinfo userInfo={userInfo} handleLogout={handleLogout} />

      </div>

      <div className="second-component">
        <Myreview userInfo={userInfo} />
      </div>
    </div>
  );
}

// {Reviews.map((idx) => {
//   return <Myreview
//     key={idx}
//     title={title}
//     content={content}
//   />
// })}
