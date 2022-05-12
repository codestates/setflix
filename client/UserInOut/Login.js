import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;

export default function Login () {
    const [userInfo, setUserInfo] = useState({
        userId: '',
        password: '',
    })
    const handleInputValue = (key) => (e) => {
        setUserInfo({...userInfo, [key]: e.target.value})
    }
    
    console.log(userInfo)

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
                    <button className='btn btn-login' type='submit'>
                        로그인
                    </button>
                    </form>
                <div>
                    <Link to='/signup'>회원가입</Link>
                    <Link to='/findaccount'>아이디/패스워드 찾기</Link>
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