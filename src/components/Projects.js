import React from 'react';
import { Typography } from '@mui/material';
import './styles/Projects.css';
import { forwardRef } from 'react';
import Grid from '@mui/material/Grid';
import { SmallCard } from './Card';

const Projects = forwardRef((props, ref) => {
  return (
    <div className='projects-box' ref={ref}>
      <Typography variant='h4'>My Projects</Typography>
      <Typography variant='p'>
        These are a couple of projects I worked on.
      </Typography>
      <Grid container spacing={2} sx={{ marginTop: '10px' }}>
        <Grid item xs={12} md={3} lg={4}>
          <SmallCard
            title='Password Strength Analyser'
            description='An app that allows you to test the strength of your passwords and provides tips on how to improve them.'
            link='https://srija-mukh.github.io/password-strength-analyser/'
            button={true}
          ></SmallCard>
        </Grid>
        <Grid item xs={12} md={3} lg={4}>
          <SmallCard
            title=' Connect 4'
            description='A game of Connect 4 created using React'
            link='https://github.com/Srija-Mukh/connect-four'
            button={true}
          ></SmallCard>
        </Grid>
        <Grid item xs={12} md={3} lg={4}>
          <SmallCard
            title='Puppy Safe Chrome Extension'
            description="A chrome extension that could potentially use NLP to report incidents of cyberbullying. This submission won 4th place in CSESoc's 2022 Annual Hackathon. "
            link='https://github.com/Peedee2002/Hackathon2022'
            button={true}
          ></SmallCard>
        </Grid>
        <Grid item xs={12} md={3} lg={4}>
          <SmallCard
            title='React Spring Calculator'
            description='A calculator that calls an API written in Springboot to make calculations.'
            link='https://github.com/Srija-Mukh/react-spring-calc'
            button={true}
          ></SmallCard>
        </Grid>
        <Grid item xs={12} md={3} lg={4}>
          <SmallCard
            title='World Clock (WIP)'
            description='An app that allows you to search for a city and view the local time at the city as well as compare it to your location.'
            link='#'
            button={false}
          ></SmallCard>
        </Grid>
        <Grid item xs={12} md={3} lg={4}>
          <SmallCard
            title='Thesis Project (WIP)'
            description='A Searchable Encryption scheme for genetic data.'
            link='#'
            button={false}
          ></SmallCard>
        </Grid>
      </Grid>
    </div>
  );
});

export default Projects;
