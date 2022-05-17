import React, { useState } from 'react';
import axios from 'axios';
import Movieevaluate from '../Component_Junehwan/movieevaluate';

export default function Postreview () {
    const [movieReview, setMovieReview] = useState({
        movieTitle: '',
        movieReview: '',
    })

    const handleInputValue = (key) => (e) => {
      setMovieReview({...movieReview, [key]: e.target.value})
    }

    const handlePostReview = () => {
      const {movieTitle, movieReview} = loginInfo
      axios.post('https://localhost:4000/review',
      {movieTitle, movieReview},
      {withCredentials: true}
      )
      .then((res) => console.log(res))
  }

    return (
      <div>
        <div>
          <Movieevaluate />
        </div>
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <span>icon1</span>
            <span>icon2</span>
            <span>icon3</span>
            <span>icon4</span>
          </div>
          <div>
            <span>제목</span>
            <input className='movie-title' />
          </div>
          <div>
            <span>평점</span>
            <span>*****</span>
          </div>
          <div>
            <span>후기</span>
            <input className='movie-review' onChange={handleInputValue('review')} />
          </div>
          <button className='btn review-submit' onClick={handlePostReview}>제출하기</button>
          </form>
        </div>
      </div>
    )
}