import React from 'react';
import { Typography } from '@mui/material';
import './styles/Projects.css';
import { forwardRef } from 'react';
import Grid from '@mui/material/Grid';
import {SmallCard} from './Card';

const Projects = forwardRef((props, ref) => {
  return (
    <div className='projects-box' ref={ref}>
      <Typography variant='h4'>
        My Projects
      </Typography>
      <Typography variant='p'>These are a couple of projects I worked on.</Typography>
      <Grid container spacing={2} sx={{ marginTop: '10px' }}>
        <Grid item xs={6} lg={3} md={2}>
          <SmallCard
            title=' Connect 4'
            description='A game of Connect 4 created using React'
            link=""
          ></SmallCard>
        </Grid>
        <Grid item xs={6} lg={3} md={2}>
          <SmallCard
            title='React Spring Calculator'
            description='A calculator that calls an API written in springboot to make calculations.'
            link=""
          ></SmallCard>
        </Grid>
        <Grid item xs={12} lg={3} md={2}>
          <SmallCard
            title='Puppy Safe Chrome Extension'
            description="A chrome extension that could potentially use NLP to report incidents of cyberbullying. This submission won 4th place in CSESoc's 2022 Annual Hackathon. "
            link=""
          ></SmallCard>
        </Grid>
      </Grid>
      
    </div>
  );
});

export default Projects;
