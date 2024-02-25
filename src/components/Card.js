import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
// import { Link } from 'react-router-dom';

const OutlinedCard = ({ title, description, list }) => {
  return (
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
          <Typography variant='body1' style={{ margin: '4px' }}>
            {item}
            <br />
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

const SmallOutlinedCard = ({ title, description, link, button }) => {
  return (
    <Card
      variant='outlined'
      sx={{ border: '2px solid #841376', padding: '5px' }}
    >
      <CardContent>
        <Typography
          variant='h6'
          sx={{ fontSize: 14, fontWeight: 800 }}
          color='#841376'
          gutterBottom
        >
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          {description}
        </Typography>
      </CardContent>
      {button && (
        <Button
          href={link}
          target='_blank'
          variant='outlined'
          size='small'
          color='secondary'
        >
          Find out More
        </Button>
      )}
    </Card>
  );
};

export function BigCard({ title, description, list }) {
  return (
    <Box sx={{ minWidth: 275, maxWidth: 450, margin: 'auto' }}>
      <OutlinedCard
        title={title}
        description={description}
        list={list}
      ></OutlinedCard>
    </Box>
  );
}

export function SmallCard({ title, description, link, button }) {
  return (
    <Box sx={{ minWidth: 100, maxWidth: 450, margin: 'auto' }}>
      <SmallOutlinedCard
        title={title}
        description={description}
        link={link}
        button={button}
      ></SmallOutlinedCard>
    </Box>
  );
}
