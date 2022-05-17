import React, { useState } from "react";
import Myinfo from "../Component_Junehwan/Myinfo";
import Myreview from "../Component_Junehwan/Myreview";

export default function Mypage({ userinfo, handleLogout }) {
  return (
    <div>
      <div className="myinfo">
        <Myinfo userinfo={userinfo} handleLogout={handleLogout} />
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
