import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Redirect } from "react-router-dom";

import Login from "./UserInOut/Login";
import Signup from "./UserInOut/Signup";
import Findaccount from "./UserInOut/Findaccount";
import Mypage from "./UserInOut/Mypage";
import Modify from "./UserInOut/Modify";

import axios from "axios";
// import './App.css'

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  const isAuthenticated = (data) => {
    // TODO: 이제 인증은 성공했습니다. 사용자 정보를 호출하고, 이에 성공하면 로그인 상태를 바꿉시다.
    setIsLogin(true);
    setUserInfo(data);
  };

  const handleResponseSuccess = (data) => {
    isAuthenticated(data);
    navigate.push("/Mypage");
  };

  const handleLogout = () => {
    axios.post("http://localhost:4000/fsignout", { withCredentials: true }).then((res) => {
      setUserInfo(null);
      setIsLogin(false);
      navigate.push("/");
    });
  };

  useEffect(() => {
    isAuthenticated();
  }, []);

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/Login" element={<Login isLogin={isLogin} handleResponseSuccess={handleResponseSuccess} />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/FindAccount" element={<Findaccount />} />
        <Route path="/Mypage" element={<Mypage userInfo={userInfo} handleLogout={handleLogout} />} />
        <Route path="/Modify" element={<Modify />} />
      </Routes>
    </div>
  );
}
