import React from "react";
import './list.css';

function List( {id, title, image, review, grade } ) {
    return (
        <div className="listall">
            <div className="list_info">
                <p><img src={image} alt=""/></p>
                <span>영화이름 : {title}</span>
            </div>
            <div className="list_rating">
                <span>평점 : </span>
                {
                    Array(grade)
                        .fill()
                        .map((_, i) => (
                            <span>★</span>
                        ))
                }
            </div>
            <div className="list_review">
                <span>후기 : {review}</span>
            </div>
            <button>후기 쓰기</button>
            <p></p>
        </div>
    );
}

/*                 <img className='movie-img' 
                src="https://t1.daumcdn.net/cfile/tistory/997473445CACC98309"
                alt="movie1"/>
                */

export default List;

/* API 받고 장르 별로 */


/*
import { Component } from 'react';
import Search from '../component_soonkyu/Search'

class Subject extends Component {
    render(){
        return (
            <header>
            <h2>{this.props.title}</h2>
            </header>
        );
    }
}

class List extends Component {
    render() {
        return (
            <div className='movielist'>
                <Subject title="영화제목" sub="평점"></Subject>
            </div>
        );
    }
}
*/