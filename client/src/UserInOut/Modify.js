import React, { useState } from 'react';
import Myinfo from '../Component_Junehwan/Myinfo'
import Profilemodify from '../Component_Junehwan/Profilemodify';
import Nav from '../Componet_Soonkyu/Nav';

export default function Modify (props) {
    return (
      <div>
        <Nav />
        <div className='myinfo'>
          <Myinfo userInfo={props.userInfo} handleLogout={props.handleLogout} />
        </div>

        <div className='profilemodify'>
          <Profilemodify />
        </div>
      </div>
    )
}