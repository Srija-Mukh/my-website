import React from 'react';
import Typography from '@mui/material/Typography';
import './styles/Journey.css';
import Timeline from './Timeline.js';
import { forwardRef } from 'react';

const Journey = forwardRef((props, ref) => {
  return (
    <div className='journey-box' ref={ref}>
      <Typography variant='h4'>
        My Journey
      </Typography>
      <Typography variant='p'>These are a couple of milestones and achievements that I believe have shaped my journey in the Tech Industry.</Typography>
      <Timeline></Timeline>
    </div>
  );
});

export default Journey;
