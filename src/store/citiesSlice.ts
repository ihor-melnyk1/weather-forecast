import {
  AsyncThunkPayloadCreator, createAsyncThunk, createSlice,
} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { CityForecast, CityType, CityWeather } from '../utils/types';
import { weatherApi } from '../utils/weatherApi';
import { initialCities } from '../utils/consts';

const fetchCityPayloadCreator: AsyncThunkPayloadCreator<CityWeather,
string> = async (cityName: string, thunkApi) => {
  try {
    const responce = await weatherApi.getCityWeatherByName(cityName);
    return responce;
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    return thunkApi.rejectWithValue(message);
  }
};

export const fetchCityForecastById = createAsyncThunk(
  'cities/fetchForecastByIdStatus',
  async (cityId: number, thunkApi) => {
    try {
      const responce = await weatherApi.getCityForecastByID(cityId);
      return responce;
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      return thunkApi.rejectWithValue(message);
    }
  },
);

export const fetchCityWeatherByName = createAsyncThunk(
  'cities/fetchByNameStatus',
  fetchCityPayloadCreator,
);

export const addCityWeatherByName = createAsyncThunk(
  'cities/addByNameStatus',
  fetchCityPayloadCreator,
);

export const updateCityWeatherByName = createAsyncThunk(
  'cities/updateByNameStatus',
  fetchCityPayloadCreator,
);

export type CitiesState = {
  citiesWeather: Array<CityWeather>
  citiesForecast: Array<CityForecast>
  cities: Array<CityType>
  cityInputError: string | null
}

const citiesStorageJSON = localStorage.getItem('cities');

const initialState: CitiesState = {
  citiesWeather: [],
  citiesForecast: [],
  cities: citiesStorageJSON ? JSON.parse(citiesStorageJSON) : initialCities,
  cityInputError: null,
};

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    deleteCity: (state, action: PayloadAction<number>) => {
      state.cities = state.cities.filter(({ id }) => id !== action.payload);
      localStorage.setItem('cities', JSON.stringify(state.cities));
      state.citiesWeather = state.citiesWeather.filter(
        ({ id }) => id !== action.payload,
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchCityWeatherByName.fulfilled,
      (state, action: PayloadAction<CityWeather>) => {
        state.citiesWeather.push(action.payload);
      },
    );
    builder.addCase(
      fetchCityForecastById.fulfilled,
      (state, action: PayloadAction<CityForecast>) => {
        state.citiesForecast.push(action.payload);
      },
    );
    builder.addCase(
      addCityWeatherByName.fulfilled,
      (state, action: PayloadAction<CityWeather>) => {
        const cityWeather = action.payload;
        state.cityInputError = null;
        state.citiesWeather.push(cityWeather);
        state.cities.unshift({
          id: cityWeather.id,
          name: cityWeather.name,
        });
        localStorage.setItem('cities', JSON.stringify(state.cities));
      },
    );
    builder.addCase(
      updateCityWeatherByName.fulfilled,
      (state, action: PayloadAction<CityWeather>) => {
        const updatedCityIndex = state
          .citiesWeather.findIndex((city) => city.id === action.payload.id);
        state.citiesWeather[updatedCityIndex] = action.payload;
      },
    );
    builder.addCase(
      addCityWeatherByName.rejected,
      (state, action) => {
        if (typeof action.payload === 'string') {
          state.cityInputError = action.payload;
        }
      },
    );
  },
});

export const { deleteCity } = citiesSlice.actions;

export default citiesSlice.reducer;
