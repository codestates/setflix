import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Redirect } from "react-router-dom";

import Login from "./UserInOut/Login";
import Signup from "./UserInOut/Signup";
import Findaccount from "./UserInOut/Findaccount";
import Mypage from "./UserInOut/Mypage";
import Modify from "./UserInOut/Modify";

import axios from "axios";
import Homepage from "./Movie/Homepage";
import Movielist from "./Movie/Movielist";
import "./Page.css";
axios.defaults.withCredentials = true;

// import './App.css'

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userinfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  console.log(isLogin);
  console.log(userinfo);

  const isAuthenticated = () => {
    // TODO: 이제 인증은 성공했습니다. 사용자 정보를 호출하고, 이에 성공하면 로그인 상태를 바꿉시다.
    axios
      .get("http://localhost:4000/setflix/users/auth")
      .then((res) => {
        setIsLogin(true);
        setUserInfo(res.data.data.userInfo);
        if (isLogin === true) {
          navigate("/mypage");
        }
      })
      .catch((err) => err);
  };

  const handleResponseSuccess = () => {
    isAuthenticated();
  };

  const handleLogout = () => {
    axios.post("http://localhost:4000/setflix/users/logout").then((res) => {
      setUserInfo(null);
      setIsLogin(false);
    });
  };

  useEffect(() => {
    isAuthenticated();
  }, []);

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/Login" element={<Login isLogin={isLogin} handleResponseSuccess={handleResponseSuccess} />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/FindAccount" element={<Findaccount />} />
        <Route path="/Mypage" element={<Mypage userinfo={userinfo} handleLogout={handleLogout} />} />
        <Route path="/Modify" element={<Modify handleLogout={handleLogout} />} />
      </Routes>
    </div>
  );
}
