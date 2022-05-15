import React, { useState } from 'react';
import axios from 'axios';
import Modify from '../UserInOut/Modify';

export default function Myinfo (props) {
    return (
        <div>
            <img className="profile-pic" />
            <div>
                <span> 등급 </span>
                <span> {props.nickname} </span>
            </div>
            <div> 내 후기 갯수 </div>
            <div> 팔로워 수 </div>
            <div> 후기 관리 </div>

            <Link to='../UserInOut/modify'> 
                회원 정보 관리 
            </Link>
        </div>
    )
}