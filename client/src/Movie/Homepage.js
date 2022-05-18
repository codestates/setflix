import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import Movielist from "./Movielist";
import Nav from "../Componet_Soonkyu/Nav";
import List from '../Componet_Soonkyu/list'



function Homepage({ isLogin }) {
  return (
    <div className="Home">
      <Nav isLogin={isLogin} />
      <p>홈페이지 본문</p>
      <p>가장 많은 후기</p>
      <List />
      <p>최신 영화</p>
      <Link to ="/Movielist">영화 더 보기</Link>
 </div>
  );
}

export default Homepage;
