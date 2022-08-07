import { FC } from 'react';
import { Button, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { CustomBox, CustomLink } from './NotFoundPage.styled';

const NotFoundPage: FC = () => (
  <CustomBox component='main'>
    <Typography variant='h2'> Route not found</Typography>
    <CustomLink to='/'>
      <Button variant='contained'>
        <ArrowBackIcon />
        Back to Home Page
      </Button>
    </CustomLink>
  </CustomBox>
);

export default NotFoundPage;
