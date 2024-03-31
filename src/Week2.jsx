import React from 'react';
import './Week2.css';
import img10 from './Images/img10.png';
import img11 from './Images/img11.png';
import img12 from './Images/img12.png';
import img13 from './Images/img13.png';
import img19 from './Images/img19.png';
import img15 from './Images/img15.png';
import img16 from './Images/img16.png';
import img17 from './Images/img17.png';
import img18 from './Images/img18.png';

const Week2 = () => {
  return (
    <div className='week2-main'>
      <div className='one2'>
        Can you figure out the definition of setting from the following
        examples?
      </div>
      <div className='two2'>(take a minute to think about this)</div>
      <div className='three2'>
        <div className='box'>
          <div className='frame'>
            <img src={img15} alt='' />
          </div>
          <div className='text'>Sunny day at a beach</div>
        </div>
        <div className='box'>
          <div className='frame'>
            <img src={img16} alt='' />
          </div>
          <div className='text'>
            A cold rainy night in a haunted house in October
          </div>
        </div>
      </div>
      <div className='four2'>
        So, what do you think the definition of setting is?
        <div className='question'>
          Any guesses?{' '}
          <span className='answer'>
            ________________________________________
          </span>
          <span className='hint'>
            Hint:
            <img src={img17} alt='' />
            <img src={img18} alt='' />
          </span>
        </div>
      </div>
      <div className='five2'>
        <p>
          Setting is the time{' '}
          <img
            style={{
              height: '34px',
              display: 'inline-block',
              verticalAlign: 'middle',
            }}
            src={img18}
            alt=''
          />{' '}
          and place{' '}
          <img
            style={{
              height: '34px',
              display: 'inline-block',
              verticalAlign: 'middle',
            }}
            src={img17}
            alt=''
          />{' '}
          of a story. It often answers the questions: when? and where?
        </p>
      </div>
      <div className='six2'>
        The time of the story could be in the past, future, day, night, summer
        or winter. A story may take place in a school, a mall, a desert, an
        airplane or in a variety of other places.
      </div>
      <div className='nav'>
        <img src={img10} alt='img10' />
        <div className='nav-main'>
          <a href='/week-one'>
            <img src={img13} alt='img13' />
          </a>
          <img src={img19} alt='img19' />
          <img src={img12} alt='img12' />
        </div>
        <img src={img11} alt='img11' />
      </div>
    </div>
  );
};

export default Week2;
