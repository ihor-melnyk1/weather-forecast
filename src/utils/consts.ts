import { RootState } from '../store/store';
import { CityType } from './types';

export const initialCities: Array<CityType> = [
  {
    id: 703448,
    name: 'Kyiv',
  },
  {
    id: 706483,
    name: 'Kharkiv',
  },
  {
    id: 709930,
    name: 'Dnipro',
  },
  {
    id: 702550,
    name: 'Lviv',
  },
  {
    id: 3094802,
    name: 'Krakow',
  },
];

export const mockedState: RootState = {
  cities: {
    cityInputError: null,
    citiesWeather: [
      {
        coord: {
          lon: 30.5167,
          lat: 50.4333,
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'few clouds',
            icon: '02n',
          },
        ],
        base: 'stations',
        main: {
          temp: 21.18,
          feels_like: 21.57,
          temp_min: 20.4,
          temp_max: 22.56,
          pressure: 1002,
          humidity: 85,
        },
        visibility: 10000,
        wind: {
          speed: 1.23,
          deg: 65,
          gust: 1.29,
        },
        clouds: {
          all: 17,
        },
        dt: 1659829691,
        sys: {
          type: 2,
          id: 2003742,
          country: 'UA',
          sunrise: 1659839646,
          sunset: 1659893604,
        },
        timezone: 10800,
        id: 703448,
        name: 'Kyiv',
        cod: 200,
      },
      {
        coord: {
          lon: 36.25,
          lat: 50,
        },
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'scattered clouds',
            icon: '03n',
          },
        ],
        base: 'stations',
        main: {
          temp: 22.4,
          feels_like: 21.82,
          temp_min: 22.4,
          temp_max: 22.4,
          pressure: 1016,
          humidity: 43,
          sea_level: 1016,
          grnd_level: 998,
        },
        visibility: 10000,
        wind: {
          speed: 2.09,
          deg: 42,
          gust: 4.02,
        },
        clouds: {
          all: 37,
        },
        dt: 1659909746,
        sys: {
          country: 'UA',
          sunrise: 1659924841,
          sunset: 1659978444,
        },
        timezone: 10800,
        id: 706483,
        name: 'Kharkiv',
        cod: 200,
      },
    ],
    cities: [
      {
        id: 703448,
        name: 'Kyiv',
      },
      {
        id: 706483,
        name: 'Kharkiv',
      },
    ],
    citiesForecast: [
      {
        cod: '200',
        message: 0,
        cnt: 9,
        list: [
          {
            dt: 1659916800,
            main: {
              temp: 18.28,
              feels_like: 18.49,
              temp_min: 17.44,
              temp_max: 18.28,
              pressure: 1010,
              sea_level: 1010,
              grnd_level: 1004,
              humidity: 89,
              temp_kf: 0.84,
            },
            weather: [
              {
                id: 804,
                main: 'Clouds',
                description: 'overcast clouds',
                icon: '04n',
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 3.54,
              deg: 0,
              gust: 6.3,
            },
            visibility: 10000,
            pop: 0.05,
            sys: {
              pod: 'n',
            },
            dt_txt: '2022-08-08 00:00:00',
          },
          {
            dt: 1659927600,
            main: {
              temp: 17.27,
              feels_like: 17.48,
              temp_min: 16.56,
              temp_max: 17.27,
              pressure: 1015,
              sea_level: 1015,
              grnd_level: 1004,
              humidity: 93,
              temp_kf: 0.71,
            },
            weather: [
              {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10d',
              },
            ],
            clouds: {
              all: 97,
            },
            wind: {
              speed: 3.49,
              deg: 348,
              gust: 7,
            },
            visibility: 10000,
            pop: 0.27,
            rain: {
              '3h': 0.62,
            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2022-08-08 03:00:00',
          },
          {
            dt: 1659938400,
            main: {
              temp: 18.09,
              feels_like: 18.2,
              temp_min: 18.09,
              temp_max: 18.09,
              pressure: 1020,
              sea_level: 1020,
              grnd_level: 1005,
              humidity: 86,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10d',
              },
            ],
            clouds: {
              all: 96,
            },
            wind: {
              speed: 3.85,
              deg: 3,
              gust: 5.47,
            },
            visibility: 10000,
            pop: 0.36,
            rain: {
              '3h': 1.08,
            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2022-08-08 06:00:00',
          },
          {
            dt: 1659949200,
            main: {
              temp: 23.05,
              feels_like: 23.03,
              temp_min: 23.05,
              temp_max: 23.05,
              pressure: 1020,
              sea_level: 1020,
              grnd_level: 1005,
              humidity: 62,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10d',
              },
            ],
            clouds: {
              all: 78,
            },
            wind: {
              speed: 3.65,
              deg: 8,
              gust: 4.35,
            },
            visibility: 10000,
            pop: 0.33,
            rain: {
              '3h': 0.16,
            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2022-08-08 09:00:00',
          },
          {
            dt: 1659960000,
            main: {
              temp: 25.9,
              feels_like: 25.88,
              temp_min: 25.9,
              temp_max: 25.9,
              pressure: 1020,
              sea_level: 1020,
              grnd_level: 1005,
              humidity: 51,
              temp_kf: 0,
            },
            weather: [
              {
                id: 803,
                main: 'Clouds',
                description: 'broken clouds',
                icon: '04d',
              },
            ],
            clouds: {
              all: 53,
            },
            wind: {
              speed: 3.46,
              deg: 357,
              gust: 3.23,
            },
            visibility: 10000,
            pop: 0.12,
            sys: {
              pod: 'd',
            },
            dt_txt: '2022-08-08 12:00:00',
          },
          {
            dt: 1659970800,
            main: {
              temp: 25.74,
              feels_like: 25.68,
              temp_min: 25.74,
              temp_max: 25.74,
              pressure: 1019,
              sea_level: 1019,
              grnd_level: 1004,
              humidity: 50,
              temp_kf: 0,
            },
            weather: [
              {
                id: 802,
                main: 'Clouds',
                description: 'scattered clouds',
                icon: '03d',
              },
            ],
            clouds: {
              all: 42,
            },
            wind: {
              speed: 2.7,
              deg: 360,
              gust: 2.99,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'd',
            },
            dt_txt: '2022-08-08 15:00:00',
          },
          {
            dt: 1659981600,
            main: {
              temp: 22.22,
              feels_like: 22.09,
              temp_min: 22.22,
              temp_max: 22.22,
              pressure: 1020,
              sea_level: 1020,
              grnd_level: 1005,
              humidity: 61,
              temp_kf: 0,
            },
            weather: [
              {
                id: 803,
                main: 'Clouds',
                description: 'broken clouds',
                icon: '04n',
              },
            ],
            clouds: {
              all: 54,
            },
            wind: {
              speed: 3.25,
              deg: 355,
              gust: 6.79,
            },
            visibility: 10000,
            pop: 0.05,
            sys: {
              pod: 'n',
            },
            dt_txt: '2022-08-08 18:00:00',
          },
          {
            dt: 1659992400,
            main: {
              temp: 20.31,
              feels_like: 20.2,
              temp_min: 20.31,
              temp_max: 20.31,
              pressure: 1021,
              sea_level: 1021,
              grnd_level: 1005,
              humidity: 69,
              temp_kf: 0,
            },
            weather: [
              {
                id: 801,
                main: 'Clouds',
                description: 'few clouds',
                icon: '02n',
              },
            ],
            clouds: {
              all: 20,
            },
            wind: {
              speed: 3.43,
              deg: 22,
              gust: 7.92,
            },
            visibility: 10000,
            pop: 0.02,
            sys: {
              pod: 'n',
            },
            dt_txt: '2022-08-08 21:00:00',
          },
          {
            dt: 1660003200,
            main: {
              temp: 18.09,
              feels_like: 18.02,
              temp_min: 18.09,
              temp_max: 18.09,
              pressure: 1021,
              sea_level: 1021,
              grnd_level: 1005,
              humidity: 79,
              temp_kf: 0,
            },
            weather: [
              {
                id: 803,
                main: 'Clouds',
                description: 'broken clouds',
                icon: '04n',
              },
            ],
            clouds: {
              all: 52,
            },
            wind: {
              speed: 2.64,
              deg: 18,
              gust: 6.11,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'n',
            },
            dt_txt: '2022-08-09 00:00:00',
          },
        ],
        city: {
          id: 703448,
          name: 'Kyiv',
          coord: {
            lat: 50.4333,
            lon: 30.5167,
          },
          country: 'UA',
          population: 0,
          timezone: 10800,
          sunrise: 1659926135,
          sunset: 1659979901,
        },
      },
      {
        cod: '200',
        message: 0,
        cnt: 9,
        list: [
          {
            dt: 1659916800,
            main: {
              temp: 22.55,
              feels_like: 21.96,
              temp_min: 21.38,
              temp_max: 22.55,
              pressure: 1016,
              sea_level: 1016,
              grnd_level: 998,
              humidity: 42,
              temp_kf: 1.17,
            },
            weather: [
              {
                id: 802,
                main: 'Clouds',
                description: 'scattered clouds',
                icon: '03n',
              },
            ],
            clouds: {
              all: 40,
            },
            wind: {
              speed: 1.34,
              deg: 67,
              gust: 1.33,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'n',
            },
            dt_txt: '2022-08-08 00:00:00',
          },
          {
            dt: 1659927600,
            main: {
              temp: 21.93,
              feels_like: 21.25,
              temp_min: 21.33,
              temp_max: 21.93,
              pressure: 1017,
              sea_level: 1017,
              grnd_level: 999,
              humidity: 41,
              temp_kf: 0.6,
            },
            weather: [
              {
                id: 803,
                main: 'Clouds',
                description: 'broken clouds',
                icon: '04d',
              },
            ],
            clouds: {
              all: 76,
            },
            wind: {
              speed: 0.89,
              deg: 64,
              gust: 0.92,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'd',
            },
            dt_txt: '2022-08-08 03:00:00',
          },
          {
            dt: 1659938400,
            main: {
              temp: 25.79,
              feels_like: 25.29,
              temp_min: 25.79,
              temp_max: 25.79,
              pressure: 1017,
              sea_level: 1017,
              grnd_level: 1000,
              humidity: 33,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: 'Clouds',
                description: 'overcast clouds',
                icon: '04d',
              },
            ],
            clouds: {
              all: 96,
            },
            wind: {
              speed: 0.8,
              deg: 131,
              gust: 1.23,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'd',
            },
            dt_txt: '2022-08-08 06:00:00',
          },
          {
            dt: 1659949200,
            main: {
              temp: 31.21,
              feels_like: 29.47,
              temp_min: 31.21,
              temp_max: 31.21,
              pressure: 1017,
              sea_level: 1017,
              grnd_level: 1000,
              humidity: 24,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: 'Clouds',
                description: 'overcast clouds',
                icon: '04d',
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 1.35,
              deg: 64,
              gust: 1.23,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'd',
            },
            dt_txt: '2022-08-08 09:00:00',
          },
          {
            dt: 1659960000,
            main: {
              temp: 32.96,
              feels_like: 31.05,
              temp_min: 32.96,
              temp_max: 32.96,
              pressure: 1017,
              sea_level: 1017,
              grnd_level: 1000,
              humidity: 22,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: 'Clouds',
                description: 'overcast clouds',
                icon: '04d',
              },
            ],
            clouds: {
              all: 93,
            },
            wind: {
              speed: 2.35,
              deg: 56,
              gust: 2.12,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'd',
            },
            dt_txt: '2022-08-08 12:00:00',
          },
          {
            dt: 1659970800,
            main: {
              temp: 31.37,
              feels_like: 29.77,
              temp_min: 31.37,
              temp_max: 31.37,
              pressure: 1017,
              sea_level: 1017,
              grnd_level: 999,
              humidity: 26,
              temp_kf: 0,
            },
            weather: [
              {
                id: 803,
                main: 'Clouds',
                description: 'broken clouds',
                icon: '04d',
              },
            ],
            clouds: {
              all: 61,
            },
            wind: {
              speed: 3.14,
              deg: 47,
              gust: 3.01,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'd',
            },
            dt_txt: '2022-08-08 15:00:00',
          },
          {
            dt: 1659981600,
            main: {
              temp: 26.25,
              feels_like: 26.25,
              temp_min: 26.25,
              temp_max: 26.25,
              pressure: 1017,
              sea_level: 1017,
              grnd_level: 1000,
              humidity: 38,
              temp_kf: 0,
            },
            weather: [
              {
                id: 802,
                main: 'Clouds',
                description: 'scattered clouds',
                icon: '03n',
              },
            ],
            clouds: {
              all: 40,
            },
            wind: {
              speed: 2.14,
              deg: 43,
              gust: 3.9,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'n',
            },
            dt_txt: '2022-08-08 18:00:00',
          },
          {
            dt: 1659992400,
            main: {
              temp: 23.71,
              feels_like: 23.1,
              temp_min: 23.71,
              temp_max: 23.71,
              pressure: 1018,
              sea_level: 1018,
              grnd_level: 1000,
              humidity: 37,
              temp_kf: 0,
            },
            weather: [
              {
                id: 801,
                main: 'Clouds',
                description: 'few clouds',
                icon: '02n',
              },
            ],
            clouds: {
              all: 23,
            },
            wind: {
              speed: 1.77,
              deg: 47,
              gust: 2.51,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'n',
            },
            dt_txt: '2022-08-08 21:00:00',
          },
          {
            dt: 1660003200,
            main: {
              temp: 21.86,
              feels_like: 21.09,
              temp_min: 21.86,
              temp_max: 21.86,
              pressure: 1017,
              sea_level: 1017,
              grnd_level: 1000,
              humidity: 38,
              temp_kf: 0,
            },
            weather: [
              {
                id: 802,
                main: 'Clouds',
                description: 'scattered clouds',
                icon: '03n',
              },
            ],
            clouds: {
              all: 26,
            },
            wind: {
              speed: 1.64,
              deg: 27,
              gust: 1.63,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'n',
            },
            dt_txt: '2022-08-09 00:00:00',
          },
        ],
        city: {
          id: 706483,
          name: 'Kharkiv',
          coord: {
            lat: 50,
            lon: 36.25,
          },
          country: 'UA',
          population: 0,
          timezone: 10800,
          sunrise: 1659924841,
          sunset: 1659978444,
        },
      },
    ],
  },
};
