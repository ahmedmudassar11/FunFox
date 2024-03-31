import React from 'react';
import './Week1.css';
import img7 from './Images/img7.png';
import img8 from './Images/img8.png';
import img9 from './Images/img9.png';
import img10 from './Images/img10.png';
import img11 from './Images/img11.png';
import img12 from './Images/img12.png';
import img13 from './Images/img13.png';
import img14 from './Images/img14.png';
import cloud1 from './Images/cloud1.png';
import cloud2 from './Images/cloud2.png';
import cloud3 from './Images/cloud3.png';
import cloud4 from './Images/cloud4.png';
import cloud5 from './Images/cloud5.png';

const Week1 = () => {
  return (
    <div className='week1-main'>
      <div className='week1'>
        <img src={img9} alt='img9' className='img9' />
        <div className='text'>Week 1</div>
      </div>
      <div className='one'>
        <h1>Elements of Story Writing</h1>
      </div>
      <div className='two'>
        Welcome to term 2 of Writers Club. Are you excited for this amazing
        journey? Over the next week, we will be practicing the different
        elements of story writing. Our aim is to make stories more interesting
        and exciting.
      </div>
      <div className='three'>
        <div className='text'>
          There are <span>five</span> elements which make the foundation for
          story writing. An element is an essential part of something and every
          fiction story has the same key elements:
        </div>
        <div>
          <img className='img7' src={img7} alt='img7' />
        </div>
      </div>
      <div className='four'>
        <div>
          <img className='cloud' src={cloud1} alt='cloud1' />
          <p>SETTING</p>
        </div>
        <div>
          <img className='cloud' src={cloud2} alt='cloud2' />
          <p>CHARACTERS</p>
        </div>
        <div>
          <img className='cloud' src={cloud3} alt='cloud3' />
          <p>PLOT</p>
        </div>
        <div>
          <img className='cloud' src={cloud4} alt='cloud4' />
          <p>PROBLEM OR CONFLICT</p>
        </div>
        <div>
          <img className='cloud' src={cloud5} alt='cloud5' />
          <p>RESOLUTION</p>
        </div>
      </div>
      <div className='five'>
        You must be familiar with some of these. If not, do not worry! we will
        cover all these elements as we go along.
      </div>
      <div className='six'>
        <img src={img8} alt='img8' className='image' />
        <div className='text'>
          For today’s lesson, we will try to understand and practice writing the
          setting for our stories.
          <br />
          The setting is an important element of every fiction story.
        </div>
      </div>
      <div className='nav'>
        <img src={img10} alt='img10' />
        <div className='nav-main'>
          <img src={img13} alt='img13' />
          <img src={img14} alt='img14' />
          <a href='/week-two'>
            <img src={img12} alt='img12' />
          </a>
        </div>
        <img src={img11} alt='img11' />
      </div>
    </div>
  );
};

export default Week1;
