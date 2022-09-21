import React from 'react';
import './styles/Home.css';
import Container from 'react-bootstrap/Container';
import photo from './images/photo.png';
import Typography from '@mui/material/Typography';

function Home() {
  return (
    <div className='home-body'>
      <Container id='home-container'>
        <div id='text-box'>
          <div className='hello-text'>
            <h1 className='heading'>Hi,I'm Srija!</h1>
          </div>
          <h2>Welcome to my personal website :))</h2>
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
            Everyday, I feel amazed and inspired by the potential of technology
            and hope to build products that spread joy. I love meeting new
            people and hearing about their unique experiences and in my free
            time watching Bollywood movies.
            <br />
            <br />
            If you’d like to chat or grab a cup of cha, feel free to{' '}
            <a href='' style={{ color: '#1C0742' }}>
              get in touch
            </a>{' '}
            .
          </div>
        </div>
        <div>
          <img className='main-img' src={photo} alt='' />
        </div>
      </Container>
    </div>
  );
}

export default Home;
