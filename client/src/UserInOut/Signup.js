import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

  const [passwordCheck, setPasswordCheck] = useState({
    password: "",
  });

  const navigate = useNavigate();

  const handleInputValue = (key) => (e) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
    setPasswordCheck({ ...passwordCheck, [key]: e.target.value });
  };

  console.log(userInfo.password);
  console.log(passwordCheck.password);

  const handleSignup = () => {
    const { userId, password, nickname, email } = userInfo;

    axios.post("http://localhost:4000/setflix/users/signup", { userId, password, nickname, email }).then((res) => navigate("/login"));
  };

  return (
    <div className="signup">
      <center>
        <h1>회원가입</h1>
      </center>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
            <Nav/>
            <center>
                <h1>회원가입</h1>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <span>아이디</span>
                        <input type='userId' onChange={handleInputValue('userId')}/>
                    </div>
                    <div>
                        <span>패스워드</span>
                        <input type='password' onChange={handleInputValue('password')}/>
                    </div>
                    <div>
                        <span>패스워드 확인</span>
                        <input type='password-check' />
                        {userInfo.password === passwordCheck.password ?
                            <div> 비밀번호가 일치합니다 </div> : 
                            <div> 비밀번호가 일치하지 않습니다 </div>
                        }
                    </div>
                    <div>
                        <span>닉네임</span>
                        <input type='nickname' onChange={handleInputValue('nickname')} />
                    </div>
                    <div>
                        <span>이메일</span>
                        <input type='email' onChange={handleInputValue('email')} />
                    </div>
                    <button className='btn email-check' type='submit'>인증하기</button>
                    <div>
                        <span>이메일 인증</span>
                        <input type='email-check' />
                    </div>
                    <button className='btn btn-signup' type='submit' onClick={handleSignup}>가입하기</button>
                </form>
            </center>
        </div>
      </form>
    </div>
  );
}
