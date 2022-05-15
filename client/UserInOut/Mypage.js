import React, { useState } from 'react';
import Myinfo from '../Component_Junehwan/Myinfo'
import Myreview from '../Component_Junehwan/Myreview'

export default function Mypage () {
    return (
      <div>
        <div>
          <Myinfo />
        </div>
        <div id="cart-item-list">
                {Reviews.map((idx) => {
                  return <Myreview
                    key={idx}
                    title={title}
                    content={content}
                  />
                })}
        </div>
      </div>
    )
}