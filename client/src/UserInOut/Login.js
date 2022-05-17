import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from '../Componet_Soonkyu/Nav';

axios.defaults.withCredentials = true;

export default function Login({ handleResponseSuccess }) {
  const [loginInfo, setLoginInfo] = useState({
    userId: "",
    password: "",
  });
  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    axios
      .post("http://localhost:4000/setflix/users/login", { userId: loginInfo.userId, password: loginInfo.password })
      .then((res) => {
        // console.log(res);
        handleResponseSuccess();
      })
      .catch((err) => err);
  };

  console.log(loginInfo);

  return (
    <div>
      <Nav/>
      <center>
        <h1>로그인</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <span>아이디</span>
            <input className="input-box" type="userId" onChange={handleInputValue("userId")} />
          </div>
          <div>
            <span>패스워드</span>
            <input className="input-box" type="password" onChange={handleInputValue("password")} onKeyPress={onKeyPress} />
          </div>
          <button className="btn btn-login" type="button" onClick={handleLogin}>
            로그인
          </button>
        </form>
        <div>
          <Link to="/signup">
            <button className="btn btn-tosignup" type="button">
              회원가입
            </button>
          </Link>
          <Link to="/findaccount">
            <button className="btn btn-tofindaccount" type="button">
              아이디/패스워드 찾기
            </button>
          </Link>
        </div>
        <div>
          <h3>소셜 로그인</h3>
          <div>네이버 로그인</div>
          <div>카카오 로그인</div>
        </div>
      </center>
    </div>
  );
}
