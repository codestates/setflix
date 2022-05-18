import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from '../Componet_Soonkyu/Nav';

axios.defaults.withCredentials = true;

export default function Signup() {
  const [userInfo, setUserInfo] = useState({
    userId: "",
    password: "",
    nickname: "",
    email: "",
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordCheck, setPasswordCheck] = useState({
    passwordCheck: "",
  });

  const navigate = useNavigate();

  const handleInputValue = (key) => (e) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
    // setPasswordCheck({ ...passwordCheck, [key]: e.target.value });
  };

  const rehandleInputValue = (key) => (e) => {
    console.log(key);
    setPasswordCheck({ ...passwordCheck, [key]: e.target.value });
  };

  console.log(userInfo.password);
  console.log(passwordCheck.passwordCheck);

  const handleSignup = () => {
    const { userId, password, nickname, email } = userInfo;
    if (email === '' || password === '' || userId === '' || nickname === '') {
      setErrorMessage('모든 항목은 필수입니다')
    } else {
    axios.post("http://localhost:4000/setflix/users/signup",
    { userId, password, nickname, email },
    {withCredentials: true})
    .then((res) => navigate("/login"));
    }
  };

  return (
    <div>
      <Nav />
      <center>
        <h1>회원가입</h1>
      </center>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='signup'>
          <span>아이디</span>
          <input className="input-box" type='text' onChange={handleInputValue('userId')}/>
        </div>
        <div className='signup'>
          <span>패스워드</span>
          <input className="input-box" type="password" onChange={handleInputValue("password")} />
        </div>
        <div className='signup'>
          <span>패스워드 확인</span>
          <input className="input-box" type="password" onChange={rehandleInputValue("passwordCheck")} />
          <div> {userInfo.password === passwordCheck.passwordCheck ? "비밀번호가 일치합니다" : "비밀번호가 일치하지 않습니다"} </div>
        </div>
        <div className='signup'>
          <span>닉네임</span>
          <input className="input-box" type="text" onChange={handleInputValue("nickname")} />
        </div>
        <div className='signup'>
          <span>이메일</span>
          <input className="input-box" type="email" onChange={handleInputValue("email")} />
          <button className="btn email-check" type="button">
            인증하기
          </button>
        </div>
        <div className='signup'>
          <span>이메일 인증</span>
          <input className="input-box" type="email" />
        </div>
        <center>
          <button className="btn btn-signup" type="button" onClick={handleSignup}>
            가입하기
          </button>
          <div>
          {errorMessage}
          </div>
        </center>
      </form>
    </div>
  );
}
