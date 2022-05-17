import React, { useState } from 'react';
import axios from 'axios';
import Movieevaluate from '../Component_Junehwan/Movieevaluate'
import Nav from '../Componet_Soonkyu/Nav';

export default function Postreview ({ postReview, userInfo, title, grade, image}) {
    const [movieReview, setMovieReview] = useState({
        nickname: userInfo.nickname,
        title: '',
        review: ''
    })
    console.log(movieReview)

    const handleInputValue = (key) => (e) => {
      setMovieReview({...movieReview, [key]: e.target.value})
    }

    const handlePostReview = () => {
      const {userId, nickname, title, review} = movieReview
      axios.post(`http://localhost:4000/setflix/reviews/${nickname}`,
      {nickname, title, review},
      {withCredentials: true}
      )
      .then((res) => postReview(res))
  }

    return (
      <div>
        <Nav />
        <div className='movie-evaluate'>
          <Movieevaluate title={title} grade={grade} image={image} />
        </div>
        <div className='review-write'>
          <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <span>icon1</span>
            <span>icon2</span>
            <span>icon3</span>
            <span>icon4</span>
          </div>
          <div>
            <span>제목: {title}</span>
          </div>
          <div>
            <span>평점: *****</span>
          </div>
          <div>
            <span>후기</span>
            <input className='movie-review' onChange={handleInputValue('review')} />
          </div>
          <button className='btn review-submit' type='button' onClick={handlePostReview}>제출하기</button>
          </form>
        </div>
      </div>
    )
}