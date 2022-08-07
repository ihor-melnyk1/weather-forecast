import { Box, List, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const CustomList = styled(List)({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '10px',
});

export const CustomBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const CustomLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
});
