import React from 'react';
import './styles/Contact.css';
import Typography from '@mui/material/Typography';
import { forwardRef } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = forwardRef((props, ref) => {
  return (
    <footer id='contact-box' ref={ref}>
      <div>
        <Typography variant='h4'>
          Contact Me
        </Typography>
        <div id='contact-icons'>
          <div className='icon-box'>
            <EmailIcon></EmailIcon>
            <a href="mailto:mukh.srija@gmail.com"><Typography variant='p'>Email</Typography></a>
          </div>
          <div className='icon-box'>
            <GitHubIcon></GitHubIcon>
            <a href="https://github.com/Srija-Mukh"><Typography variant='p'>Github</Typography></a>
          </div>
          <div className='icon-box'>
            <LinkedInIcon></LinkedInIcon>
            <a href="https://www.linkedin.com/in/srija-mukherjee-0541001aa/"><Typography variant='p' >LinkedIn</Typography></a>
          </div>
        </div>
        <Typography style={{ fontSize: '12px', marginTop: '20px' }}>
          ©Srija Mukherjee, 2024
        </Typography>
      </div>
    </footer>
  );
});

export default Contact;
