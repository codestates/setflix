import React from 'react';
import './Movielist.css';
import List from '../Componet_Soonkyu/list'
import Nav from '../Componet_Soonkyu/Nav';

function Movielist () {
    return (
        <div className='movieall'>
            <Nav/>
            <div className='movie-container'>
                <div className='movie-row'>
                    <p>영화 리스트</p>
                    <span>최신영화</span>
                    <List/>
                </div>
                <div className='movie-row'>

                    <span>액션영화(장르 별로)</span>
                    <List
                        id="2" title ="영화2"
                        image ="https://file2.nocutnews.co.kr/newsroom/image/2022/04/08/202204081311322351_0.jpg"
                        grade = {5}
                        review = "인생 최고의 명작" />
                </div>        
            </div>
        </div>
    )
}

export default Movielist;