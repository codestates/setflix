import React, { useState } from 'react';
import axios from 'axios';

export default function Profilemodify () {
    return (
        <div>
          <center>
            <div>
            <h1>프로필</h1>
            <div>
              <img className='movie-pic' />
              <span>변경할 이미지를 넣어주세요</span>
              <button className='btn info-change'>변경하기</button>
            </div>
            <div>
              <span>닉네임</span>
              <span>{}</span>
              <button className='btn info-change'>변경하기</button>
            </div>
            <div>
              <span>이메일</span>
              <span>{}</span>
              <button className='btn info-change'>변경하기</button>
            </div>
              <button className='btn signout'>회원 탈퇴</button>
        </div>
        </center>
      </div>
    )
}