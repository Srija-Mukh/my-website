import React from 'react';
import { Typography } from '@mui/material';
import './styles/Projects.css';
import { forwardRef } from 'react';
import Grid from '@mui/material/Grid';
import {SmallCard} from './Card';

const Projects = forwardRef((props, ref) => {
  return (
    <div id='projects-box' ref={ref}>
      <Typography variant='h4' style={{ fontWeight: '600', color: '#1C0742' }}>
        My Projects
      </Typography>
      <Typography variant='p'>These are a couple of projects I worked on.</Typography>
      <Grid container spacing={2} sx={{ marginTop: '10px' }}>
        <Grid item xs={6} lg={2} md={2}>
          <SmallCard
            title=' Connect 4'
            description='A game of Connect 4 created using React'
            list={[]}
          ></SmallCard>
        </Grid>
        <Grid item xs={6} lg={2} md={2}>
          <SmallCard
            title='React Spring Calculator'
            description='A calculator that calls an API written in springboot to make calculations.'
            list={[]}
          ></SmallCard>
        </Grid>
        <Grid item xs={6} lg={2} md={2}>
          <SmallCard
            title='Puppy Safe Chrome Extension'
            description="A chrome extension that could potentially use NLP to report incidents of cyberbullying. This submission won 4th place in CSESoc's 2022 Annual Hackathon. "
            list={[]}
          ></SmallCard>
        </Grid>
      </Grid>
      
    </div>
  );
});

export default Projects;
