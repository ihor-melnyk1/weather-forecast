import { screen, within } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test-utils';

import { mockedState } from '../../../utils/consts';
import '@testing-library/jest-dom';
import HomePage from '../../../pages/HomePage/HomePage';

test('Renders correctly', async () => {
  renderWithProviders(<HomePage />, {
    preloadedState: mockedState,
  });

  expect(screen.getByPlaceholderText('City name...')).toBeInTheDocument();
  const cityList = screen.getByRole('list');
  const { getAllByRole } = within(cityList);
  const cityItems = getAllByRole('listitem');
  expect(cityItems.length).toEqual(mockedState.cities.cities.length);
});
