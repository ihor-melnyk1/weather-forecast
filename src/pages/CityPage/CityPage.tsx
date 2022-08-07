import { FC, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Navigate, useParams } from 'react-router-dom';
import { format, fromUnixTime } from 'date-fns';
import {
  Box, Button, CardMedia, Typography,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchCityForecastById } from '../../store/citiesSlice';

import { CustomBox, CustomLink, CustomWrapper } from './CityPage.styled';

import { options } from '../../utils/chartConfig';

const CityPage: FC = () => {
  const { cityId } = useParams();
  const dispatch = useAppDispatch();
  const cityWeather = useAppSelector(
    (state) => state.cities.citiesWeather.find(
      ({ id }) => id === Number(cityId),
    ),
  );
  const cityForecast = useAppSelector(
    (state) => state.cities.citiesForecast.find(
      ({ city }) => city.id === Number(cityId),
    ),
  );
  useEffect(() => {
    if (cityWeather && !cityForecast) {
      dispatch(fetchCityForecastById(Number(cityId)));
    }
  }, []);

  const chartLabels = cityForecast?.list.map(
    ({ dt }) => format(fromUnixTime(dt), 'HH:mm'),
  );

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        fill: true,
        label: 'Temprature,°С',
        data: cityForecast?.list.map(({ main }) => main.temp),
        backgroundColor: 'rgba(255, 204, 0, 0.2)',
        borderColor: 'rgb(232, 148, 14)',
      },
    ],
  };

  return (
    cityWeather
      ? (
        <CustomWrapper>
          <CustomLink to='/'>
            <Button variant='contained'>
              <ArrowBackIcon />
              Back to cities
            </Button>
          </CustomLink>
          <CustomBox>
            <Typography variant='h2'>
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
          <CustomBox>
            <CardMedia
              component='img'
              sx={{ width: 'initial' }}
              src={`${process.env.REACT_APP_IMG_HOST}/img/wn/${cityWeather.weather[0].icon}@2x.png`}
              alt='Weather icon'
            />
            <Typography variant='h2'>
              {`${cityWeather.main.temp}°С`}
            </Typography>
            <Box sx={{ marginLeft: '20px' }}>
              <Typography variant='subtitle1'>
                {`Feels like ${cityWeather.main.feels_like}°С, ${cityWeather.weather[0].description}.`}
              </Typography>
              <CustomBox sx={{ flexWrap: 'wrap' }}>
                <Typography variant='subtitle2'>
                  {`Wind speed: ${cityWeather.wind.speed} m/s`}
                </Typography>
                <Typography variant='subtitle2'>
                  {`Cloudiness: ${cityWeather.clouds.all} %`}
                </Typography>
                <Typography variant='subtitle2'>
                  {`Pressure: ${cityWeather.main.pressure} hPa`}
                </Typography>
                <Typography variant='subtitle2'>
                  {`Humidity: ${cityWeather.main.humidity} %`}
                </Typography>
                <Typography variant='subtitle2'>
                  {`Visibility: ${cityWeather.visibility} m`}
                </Typography>
              </CustomBox>
            </Box>
          </CustomBox>
          <Typography variant='h4' textAlign='center' sx={{ margin: '20px' }}>
            Hourly forecast for next 24 hours
          </Typography>
          <Line options={options} data={chartData} />
        </CustomWrapper>
      )
      : <Navigate to='/' replace />
  );
};

export default CityPage;
