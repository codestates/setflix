import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import Nav from "../Componet_Soonkyu/Nav";
import List from "../Componet_Soonkyu/list";

function Homepage({ isLogin }) {
  return (
    <div>

    <div className="Home">
      <Nav isLogin={isLogin} />
        <div className="Homemain">
          영화 목록
          <Link to ="/Movielist">영화 더 보기</Link>
        </div>
      <List/>

      </div>
    </div>
  );
}

export default Homepage;
