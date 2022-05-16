import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
return (
    <nav className="navigation">
        <div className="navigation_left">
            <img className="navigation_logo" src="https://mblogthumb-phinf.pstatic.net/MjAyMDA5MTZfMjc1/MDAxNjAwMjMwMDI0MjU0.CEm_wbVD1SDBfzA07yh7rRfM-zYQGcBO1zoh_q5zFrAg.WeAhy93tXaRWJzxbdBuneabs5nBibS5UZPA-siJEOSsg.PNG.designmage/6.png?type=w800" alt="setflixlogo"/>
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
            <Link to ="/Login">login/signup</Link>
        </div>
    </nav>
);
}

// {users.profile}, {users.nickname}님 환영합니다. / 로그인 시 프로필 이미지, 환영합니다 넣기


export default Nav;