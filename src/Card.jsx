import React from 'react';
import './Card.css';

export default function Card(props) {
  return (
    <div className='moviecard'>
      <div className='imgdiv'>
        <img src={props.srclink} alt='Movie Poster' />
      </div>
      <div className='carddata'>
        <h5>Original Series</h5>
        <h3>{props.name}</h3>
        <div className='watchbtn'>
          <a href={props.mainlink}>Watch</a>
        </div>
        {props.platform}
        
      </div>
    </div>
  );
}
