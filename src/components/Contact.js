import React from 'react';
import './styles/Contact.css';
import Typography from '@mui/material/Typography';
import { forwardRef } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = forwardRef((props, ref) => {
  return (
    <footer className='contact-box' ref={ref}>
      <div>
        <Typography variant='h4'>
          Contact Me
        </Typography>
        <div id='contact-icons'>
          <div className='icon-box'>
            <EmailIcon></EmailIcon>
            <Typography variant='p'>Email</Typography>
          </div>
          <div className='icon-box'>
            <GitHubIcon></GitHubIcon>
            <Typography variant='p'>Github</Typography>
          </div>
          <div className='icon-box'>
            <LinkedInIcon></LinkedInIcon>
            <Typography variant='p'>LinkedIn</Typography>
          </div>
        </div>
        <Typography style={{ fontSize: '12px', marginTop: '20px' }}>
          ©Srija Mukherjee, 2022
        </Typography>
      </div>
    </footer>
  );
});

export default Contact;
