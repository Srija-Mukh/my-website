import React, { forwardRef } from 'react';
import './styles/Learning.css';
import Typography from '@mui/material/Typography';
import {BigCard} from './Card';
import Grid from '@mui/material/Grid';

const Learning = forwardRef((props, ref) => {
  return (
    <div className='learning-box' ref={ref}>
      <Typography variant='p' style={{ fontWeight: '200' }}>
        A life philosophy I strive to live by is
      </Typography>
      <Typography style={{ fontStyle: 'italic' }}>
        Be humble, be teachable and always keep learning <br /> - unknown
      </Typography>
      <Typography variant='p'>
        So at any point of time you can find me delving into a bunch of different technical and non technical interest areas. More recently, this is what I have been up to.
      </Typography>
      <Grid container spacing={2} sx={{ marginTop: '10px' }}>
        <Grid item xs={12} lg={4} md={4}>
          <BigCard
            title=' 🔨 BUILDING 🔨'
            description='Working on creating..'
            list={['This website', 'A React calculator']}
          ></BigCard>
        </Grid>
        <Grid item xs={12} lg={4} md={4}>
          <BigCard
            title='📚 LEARNING 📚'
            description='Currently studying up on..'
            list={['AWS Cloud Fundamentals', 'Apache Kafka Fundamentals', 'Springboot Fundamentals']}
          ></BigCard>
        </Grid>
        <Grid item xs={12} lg={4} md={4}>
          <BigCard
            title='🔎 EXPLORING 🔎'
            description='Looking to start learning..'
            list={['Web3', 'Cybersecurity Fundamentals']}
          ></BigCard>
        </Grid>
      </Grid>
    </div>
  );
});

export default Learning;
