import React, { useState } from "react";
import Myinfo from "../Component_Junehwan/Myinfo";
import Myreview from "../Component_Junehwan/Myreview";
import Nav from '../Componet_Soonkyu/Nav';

export default function Mypage({ userInfo, handleLogout }) {
  return (
    <div>
      <Nav />
      <div className="myinfo">
        <Myinfo userInfo={userInfo} handleLogout={handleLogout} />
      </div>

      <div className="myreview">
        <Myreview />
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
