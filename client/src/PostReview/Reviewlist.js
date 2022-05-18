import React, { useState } from 'react';
import axios from 'axios';
import Movieevaluate from '../Component_Junehwan/Movieevaluate';
import Nav from '../Componet_Soonkyu/Nav';

export default function Reviewlist () {

    return (
        <div>
            <Nav />
            <div className='movie-evaluate'>
                <Movieevaluate />
            </div>
            <div className='review-write'>
                <h1>Best후기</h1>
                <div>이 영화 봤어요!</div>
            </div>
            <div className='third-component'>
                <h1>최신후기</h1>
            </div>
        </div>
    )
}