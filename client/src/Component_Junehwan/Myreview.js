import React, { useState } from 'react';
import axios from 'axios';

export default function Myreview () {
   // axios.get('http://localhost:4000/setflix/reviews', {})
   // .then((res) => console.log(res))

    return (
        <div>
            <img className='movie-pic' />
            <div>후기 제목</div>
            <div>후기 내용</div>
            <div>날짜</div>
            <div>
              <span>수정하기</span>
              <span>삭제하기</span>
            </div>
        </div>
    )
}