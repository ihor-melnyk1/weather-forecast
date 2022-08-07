import { Box, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const CustomHeader = styled(Box)({
  backgroundColor: '#5976eb',
  padding: 20,
});

export const CustomLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,
  width: 'fit-content',
  margin: 'auto',
});
