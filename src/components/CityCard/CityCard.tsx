import { FC, useEffect } from 'react';
import {
  Box,
  Button, CardActions, CardContent, CardMedia, IconButton, Skeleton, Typography,
} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import DeleteIcon from '@mui/icons-material/Delete';
import LoadingButton from '@mui/lab/LoadingButton';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  deleteCity, fetchCityWeatherByName, updateCityWeatherByName,
} from '../../store/citiesSlice';

import { CustomBox, CustomLink, CustomListItem } from './CityCard.styled';

import { CityCardProps } from './CityCard.type';

const CityCard: FC<CityCardProps> = ({ city }) => {
  const dispatch = useAppDispatch();
  const cityWeather = useAppSelector(
    (state) => state.cities.citiesWeather.find(({ id }) => id === city.id),
  );

  useEffect(() => {
    if (!cityWeather) {
      dispatch(fetchCityWeatherByName(city.name));
    }
  }, []);

  const handleRefreshButonClick = () => {
    dispatch(updateCityWeatherByName(city.name));
  };

  return (
    <CustomListItem>
      <CardContent>
        {cityWeather
          ? (
            <CustomBox>
              <Typography variant='h4'>
                {`${cityWeather.name}, ${cityWeather.sys.country}`}
              </Typography>
              <CardMedia
                component='img'
                sx={{
                  width: 'fit-content',
                  height: 'fit-content',
                }}
                src={`${process.env.REACT_APP_IMG_HOST}/images/flags/${cityWeather.sys.country.toLowerCase()}.png`}
                alt='Country icon'
              />
            </CustomBox>
          )
          : <Skeleton variant='text' height={42} />}
        {cityWeather
          ? (
            <CustomBox>
              <CardMedia
                component='img'
                sx={{ width: 'initial' }}
                src={`${process.env.REACT_APP_IMG_HOST}/img/wn/${cityWeather.weather[0].icon}@2x.png`}
                alt='Weather icon'
              />
              <Box width={180}>
                <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                  {`${cityWeather.main.temp}°С`}
                </Typography>
                <Typography variant='body2' component='div'>
                  {cityWeather.weather[0].description}
                </Typography>
              </Box>
            </CustomBox>
          )
          : <Skeleton variant='rectangular' height={100} width={290} />}
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <CustomLink to={`/weather-forecast/city/${city.id}`}>
          <Button
            variant='contained'
            size='medium'
            disabled={!cityWeather}
          >
            More Info
          </Button>

        </CustomLink>
        <LoadingButton
          loading={false}
          disabled={!cityWeather}
          variant='contained'
          size='medium'
          onClick={handleRefreshButonClick}
        >
          Refresh
          <RefreshIcon />
        </LoadingButton>
        <IconButton
          aria-label='delete'
          sx={{ marginLeft: 'auto' }}
          onClick={() => { dispatch(deleteCity(city.id)); }}
        >
          <DeleteIcon
            color='error'
            fontSize='large'
          />
        </IconButton>
      </CardActions>
    </CustomListItem>
  );
};

export default CityCard;
