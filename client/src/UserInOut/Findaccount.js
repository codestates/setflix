import React, { useState } from 'react';
import axios from 'axios';
import Nav from '../Componet_Soonkyu/Nav';

    export default function Findaccount () {
        return(
         <div>
           <Nav />
            <center>
              <div>아이디 찾으실거죠?</div>
              <div>비밀번호 찾으실거죠?</div>
            </center>
         </div>
        ) 
}