import React, { useState } from 'react';
import axios from 'axios';
import Movieevaluate from '../Component_Junehwan/movieevaluate';

export default function Reviewlist () {

    return (
        <div>
            <div>
                <Movieevaluate />
            </div>
            <div>
                <h1>Best후기</h1>
                <span>이 영화 봤어요!</span>
                <Link to='/postreview'>후기 쓰기</Link>
                <div>
                
                </div>
            </div>
            <div>
                <h1>최신후기</h1>
            </div>
        </div>
    )
}