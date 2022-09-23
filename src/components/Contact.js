import React from 'react';
import './styles/Contact.css';
import Typography from '@mui/material/Typography';

function Contact() {
    return <footer id='contact-box'>
        <div>
        <Typography variant='h4'style={{fontWeight: '600'}}>
            Contact Me
        </Typography>
        <div id='contact-icons'>
            <Typography variant='p'>
                Email
            </Typography>
            <Typography variant='p'>
                Github
            </Typography>
            <Typography variant='p'>
                LinkedIn
            </Typography>
        </div>
        <Typography style={{fontSize:'12px', marginTop: '20px'}}>
            ©Srija Mukherjee, 2022
        </Typography>
        </div>
    </footer>;
}

export default Contact;
