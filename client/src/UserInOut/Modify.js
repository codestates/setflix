import React, { useState } from 'react';
import Myinfo from '../Component_Junehwan/Myinfo'
import Profilemodify from '../Component_Junehwan/Profilemodify';

export default function Modify (handleLogout) {
    return (
      <div>
        <div className='myinfo'>
          <Myinfo />
        </div>

        <div className='profilemodify'>
          <Profilemodify handleLogout={handleLogout} />
        </div>
      </div>
    )
}