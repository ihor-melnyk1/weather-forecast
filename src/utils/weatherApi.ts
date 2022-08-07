import axios, { AxiosError } from 'axios';
import { CityForecast, CityWeather } from './types';

export const weatherApi = {
  async getCityWeatherByName(cityName: string): Promise<CityWeather> {
    try {
      const response = await axios.get<CityWeather>(
        `${process.env.REACT_APP_WEATHER_API_HOST}/weather?q=${cityName}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`,
      );
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.message);
      }
      throw error;
    }
  },
  async getCityForecastByID(cityId: number): Promise<CityForecast> {
    try {
      const response = await axios.get<CityForecast>(
        `${process.env.REACT_APP_WEATHER_API_HOST}/forecast?id=${cityId}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric&cnt=9`,
      );
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.message);
      }
      throw error;
    }
  },
};
