import React from 'react';
import Typography from '@mui/material/Typography';
import './styles/Journey.css';
import Timeline from './Timeline.js';
import { forwardRef } from 'react';

const Journey = forwardRef((props, ref) => {
  return (
    <div id='journey-box' ref={ref}>
      <Typography variant='h4' style={{ fontWeight: '600', color: '#1C0742' }}>
        My Journey
      </Typography>
      <Typography variant='p'>These are a couple of milestones and achievements that I believe have shaped me.</Typography>
      <Timeline></Timeline>
    </div>
  );
});

export default Journey;
