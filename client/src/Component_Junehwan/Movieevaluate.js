import React from "react";
import { Link } from "react-router-dom";

export default function Movieevaluate ({ title, grade, image }) {
    // console.log(title)
    return (
        <div className='information'>
            <img className='movie-pic-small' />
            <div>영화 제목: {title}</div>
            <div>후기 {}개</div>
            <div>평점: {grade}</div>
            <div>이 영화 봤어요 {}명</div>

            <Link to='/reviewlist'>
                <div>후기 목록으로 가기</div>
            </Link>
        </div>
    )
}