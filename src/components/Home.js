import React from 'react';
import Typography from '@mui/material/Typography';
import Container from 'react-bootstrap/Container';
import './styles/Home.css';
import photo from './images/pic.png';

function Home() {
  return (
    <div>
      <div className='home-body'>
        <Container id='home-box'>
          <div id='home-text'>
            <div className='hello-text'>
              <Typography variant='h3' style={{ fontWeight: '700' }}>
                Hi, I'm Srija!
              </Typography>
            </div>
            <Typography variant='h7' style={{ fontWeight: '600' }}>
              Welcome to my personal website :))
            </Typography>
            <div>
              I am currently a student at the
              <p style={{ display: 'inline', fontWeight: '700' }}>
                {' '}
                <a href='' style={{ color: '#F8AB20' }}>
                  University of New South Wales
                </a>
              </p>
              , studying Software Engineering. I’m also interning as a Software
              Developer at
              <p style={{ display: 'inline', fontWeight: '700' }}>
                {' '}
                <a href='' style={{ color: '#981616' }}>
                  {' '}
                  National Australia Bank
                </a>{' '}
              </p>
              .
              <br />
              <br />
              Everyday, I feel amazed and inspired by the ✨ potential of
              technology ✨ and hope to build products that spread joy. I love
              meeting new people and hearing about their unique experiences and
              in my free time watching Bollywood movies.
              <br />
              <br />
              If you’d like to chat or grab a cup of cha ☕, feel free to{' '}
              <a href='' style={{ color: '#1C0742' }}>
                get in touch
              </a>{' '}
              .
            </div>
          </div>
          <div id='home-image'>
            <img src={photo} alt='' />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Home;
