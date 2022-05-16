import React, { useState } from 'react';
import Myinfo from '../Component_Junehwan/Myinfo'
import Myreview from '../Component_Junehwan/Myreview'


export default function Mypage (props) {
  console.log(props)
    return (
      <div>
        <div className='myinfo'>
          <Myinfo />
        </div>

        <div className='myreview'>
          <Myreview />
        </div>
      </div>
    )
}

// {Reviews.map((idx) => {
//   return <Myreview
//     key={idx}
//     title={title}
//     content={content}
//   />
// })}