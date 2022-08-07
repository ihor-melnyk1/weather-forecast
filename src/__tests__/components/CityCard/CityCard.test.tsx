import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test-utils';
import CityCard from '../../../components/CityCard/CityCard';
import { mockedState } from '../../../utils/consts';
import '@testing-library/jest-dom';

test('Renders correctly', async () => {
  const testedCity = mockedState.cities.cities[0];
  const cityWeather = mockedState.cities.citiesWeather[0];
  renderWithProviders(<CityCard city={testedCity} />, {
    preloadedState: mockedState,
  });

  expect(screen.getByText(`${cityWeather?.name}, ${cityWeather?.sys.country}`)).toBeInTheDocument();
  expect(screen.getByAltText('Weather icon')).toBeInTheDocument();
  expect(screen.getByText(`${cityWeather?.main.temp}°С`)).toBeInTheDocument();
  expect(screen.getByText(cityWeather?.weather[0].description))
    .toBeInTheDocument();
});

test('Opens Info page', async () => {
  const testedCity = mockedState.cities.cities[0];
  renderWithProviders(<CityCard city={testedCity} />, {
    preloadedState: mockedState,
  });

  const button = screen.getByRole('button', { name: 'More Info' });
  fireEvent.click(button);
  expect(window.location.pathname).toBe(`/city/${testedCity.id}`);
});
