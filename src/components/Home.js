import React, { forwardRef } from 'react';
import Typography from '@mui/material/Typography';
import Container from 'react-bootstrap/Container';
import './styles/Home.css';
import Emoji from './Emoji';
import SparkleTrail from './SparkleTrail';

const Home = forwardRef((contactRef, ref) => {
  const ToContact = (e) => {
    e.preventDefault();
    contactRef.current.scrollIntoView({ behaviour: 'smooth' });
  };
  return (
    <div id='home-body' ref={ref}>
      <SparkleTrail targetSelector='#home-body' />
      <Container id='home-box'>
        <div id='home-text'>
          <div className='hello-text'>
            <Typography variant='h3' style={{ fontWeight: '700' }}>
              Hi, I'm Srija! <Emoji symbol='👋🏽'></Emoji>
            </Typography>
          </div>
          <Typography
            class='welcome-phrase'
            variant='h7'
            style={{ fontWeight: '600' }}
          >
            Welcome to my personal website :))
          </Typography>
          <div>
            <Typography variant='p'>
              I am currently a tutor and Software Enginnering student at the
            </Typography>
            <Typography
              variant='p'
              style={{ display: 'inline', fontWeight: '700' }}
            >
              {' '}
              <a href='' style={{ color: '#F8AB20' }}>
                University of New South Wales
              </a>
            </Typography>
            <Typography variant='p'>
              . I also recently interned as a Software Engineer at
            </Typography>
            <Typography
              variant='p'
              style={{ display: 'inline', fontWeight: '700' }}
            >
              {' '}
              <a href='#' style={{ color: '#981616' }}>
                {' '}
                National Australia Bank
              </a>{' '}
            </Typography>
            .
            <br />
            <br />
            <Typography variant='p'>
              Everyday, I feel amazed and inspired by the{' '}
              <Emoji symbol='✨'></Emoji> potential of technology{' '}
              <Emoji symbol='✨'></Emoji> and hope to build products that spread
              joy. I love meeting new people and hearing about their unique
              experiences. In my free time, you can find me walking on long
              coastal trails, watching Bollywood movies, playing Badminton or
              reading <Emoji symbol='📚'></Emoji>.
              <br />
              <br />
              If you’d like to chat or grab a cup of cha{' '}
              <Emoji symbol='☕'></Emoji> , feel free to{' '}
              <a class='get-in-touch' href='#contact-box'>
                get in touch
              </a>{' '}
              .
            </Typography>
          </div>
        </div>
        {/* <div id='home-image'>
          <img src={} srcSet={} />
        </div> */}
      </Container>
    </div>
  );
});

export default Home;
