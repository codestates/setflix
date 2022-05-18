import React, { useState } from 'react';
import axios from 'axios';
import Movieevaluate from '../Component_Junehwan/Movieevaluate'
import Nav from '../Componet_Soonkyu/Nav';

export default function Postreview ({ postReview, userInfo, title, grade, image}) {
    const [movieReview, setMovieReview] = useState({
        user_id: userInfo.id,
        title: '',
        comment : ''
    })
    console.log(movieReview)
    const [myGrade, setMyGrade] = useState('')

    const handleInputValue = (key) => (e) => {
      setMovieReview({...movieReview, [key]: e.target.value})
    }

    const handlePostReview = () => {
      const {user_id, title, comment} = movieReview
      if (title === '' || comment === '') {
      } else {
      axios.post(`http://localhost:4000/setflix/reviews/`,
      { user_id, title, myGrade, comment },
      {withCredentials: true}
      )
      .then((res) => postReview(res))
      }
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
            <span>제목</span>
            <input className='movie-review' onChange={handleInputValue('title')} />
          </div>
          <div>
            <span>평점: *****</span>
          </div>
          <div>
            <span>후기</span>
            <input className='movie-review' onChange={handleInputValue('comment')} />
          </div>
          <button className='btn review-submit' type='button' onClick={handlePostReview}>제출하기</button>
          </form>
        </div>
      </div>
    )
}