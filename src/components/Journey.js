import React from 'react';
import Typography from '@mui/material/Typography';
import './styles/Journey.css';
import Timeline from './NewTimeline';

const Journey = () => {
  return (
    <div id='journey-box'>
      <Typography variant='h4' style={{ fontWeight: '600', color: '#1C0742' }}>
        My Journey
      </Typography>
      <Timeline></Timeline>
    </div>
  );
};

export default Journey;
