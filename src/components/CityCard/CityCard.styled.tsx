import {
  Box, ListItem, styled,
} from '@mui/material';
import { Link } from 'react-router-dom';

export const CustomListItem = styled(ListItem)(({ theme }) => ({
  display: 'block',
  width: 'auto',
  backgroundColor: theme.palette.secondary.main,
  flexBasis: 'auto',
}));

export const CustomBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

export const CustomLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
});
