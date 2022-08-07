import { Box, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const CustomWrapper = styled(Box)({
  padding: 20,
});

export const CustomBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

export const CustomLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
});
