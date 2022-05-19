import React, { useState, useEffect } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav({ isLogin, userInfo, handleLogout }) {
/*
    const hadleSearch = () => {
        let nextState = {};
        nextState[e.target.name] = e.tartget.value;
        this.setState(nextState);
    }

    const [] = usesStateValue();

    const handleoption = () => {
        if(users) {
            
        }
    }
*/

return (
    <nav className="navigation">
        <div className="navigation_left">
            <img className="navigation_logo" src="https://cdn.pixabay.com/photo/2013/07/12/16/23/alphabet-150826_960_720.png" alt="setflixlogo"/>
            <div className="navigation_home">
                <Link to ="/">Home</Link>
            </div>
        </div>
        <div className="search">
            <input className="searchbar" type="text" placeholder=" Title, Genres"/>
            <div className="searchIcon">
                <Link to ="/Movielist">검색</Link>
            </div>
        </div>
        <div className="navigation_right">
        {isLogin === true ? 
        <div>
        <Link to ="/Mypage">환영합니다.</Link>
        {"  "}
        <Link to ="/login">
        <button className='button' onClick={handleLogout}>Logout</button>
        </Link>
        </div>:
        <div>
        <Link to ="/Login">Login</Link>
        {""} / {""}
        <Link to ="/Signup">Signup</Link>
        </div>
        }
        </div>
    </nav>
);
}

//   <span /*onClick={handleResponse}*/ className="navigation_option"> {user ? 'login/signup' : '환영합니다'}</span>
// {users.profile}, {users.nickname}님 환영합니다. / 로그인 시 프로필 이미지, 환영합니다 넣기


export default Nav;


