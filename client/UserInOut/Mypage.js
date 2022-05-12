import React, { useState } from 'react';
import axios from 'axios';
import Myinfo from '../Component_Junehwan/Myinfo'
import Myreview from '../Component_Junehwan/Myreview'

export default function Mypage () {
    return (
      <div>
        <div>
          <Myinfo />
        </div>
        <div>
          <Myreview />
        </div>
      </div>
    )
}