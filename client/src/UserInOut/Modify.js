import React, { useState } from 'react';
import Myinfo from '../Component_Junehwan/Myinfo'
import Profilemodify from '../Component_Junehwan/Profilemodify';

export default function Modify () {
    return (
      <div>
        <div>
          <Myinfo />
        </div>

        <div>
          <Profilemodify />
        </div>
      </div>
    )
}