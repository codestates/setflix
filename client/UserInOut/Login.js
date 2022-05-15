import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;

export default function Login () {
    const [loginInfo, setLoginInfo] = useState({
        userId: '',
        password: '',
    })
    const handleInputValue = (key) => (e) => {
        setLoginInfo({...loginInfo, [key]: e.target.value})
    }
    
    console.log(loginInfo)
    
    const handleLogin = () => {
        const {userId, password} = loginInfo
        axios.post('https://localhost:4000/login',
        {userId, password},
        {withCredentials: true}
        )
        .then((res) => handleResponseSuccess(res))
    }

    return (
        <div>
            <center>
                <h1>로그인</h1>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <span>아이디</span>
                        <input type='userId' onChange={handleInputValue('userId')} />
                    </div>
                    <div>
                        <span>패스워드</span>
                        <input type='password' onChange={handleInputValue('password')}/>
                    </div>
                    <button className='btn btn-login' type='submit' onClick={handleLogin}>
                        로그인
                    </button>
                    </form>
                <div>
                <Link to='/signup'>
                    <button className='btn btn-tosignup' type='button'>
                    회원가입
                    </button>
                </Link>   
                <Link to='/findaccount'>
                    <button className='btn btn-tofindaccount' type='button'>
                    아이디/패스워드 찾기
                    </button>
                </Link>
                </div>
                <div>
                    <h1>소셜 로그인</h1>
                    <div>네이버 로그인</div>
                    <div>카카오 로그인</div>
                </div>
            </center>
        </div>
    )
}