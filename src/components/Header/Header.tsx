import { FC } from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

import { CustomHeader, CustomLink } from './Header.styled';

const Header: FC = () => (
  <CustomHeader component='header'>
    <CustomLink to='/'>
      WEATHER FORECAST
      <WbSunnyIcon fontSize='large' />
    </CustomLink>
  </CustomHeader>
);

export default Header;
