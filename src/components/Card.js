import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const OutlinedCard = ({ title, description, list }) => {
  return (
    <Box sx={{ minWidth: 275, maxWidth: 450, margin: 'auto' }}>
      <Card variant='outlined' sx={{ border: '2px solid #1C0742' }}>
        <CardContent>
          <Typography
            variant='h6'
            sx={{ fontSize: 14, fontWeight: 800 }}
            color='#1C0742'
            gutterBottom
          >
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            {description}
          </Typography>
          {list.map((item) => (
            <Typography variant='body1' style={{margin: '4px'}}>
              {item}
              <br />
            </Typography>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default OutlinedCard;
