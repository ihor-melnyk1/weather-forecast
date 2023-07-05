import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { appTheme } from './theme';

import HomePage from './pages/HomePage/HomePage';
import CityPage from './pages/CityPage/CityPage';
import Header from './components/Header/Header';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const App = () => (
  <ThemeProvider theme={appTheme}>
    <CssBaseline />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/weather-forecast' element={<HomePage />} />
        <Route path='/weather-forecast/city/:cityId' element={<CityPage />} />
        <Route path='/weather-forecast/404' element={<NotFoundPage />} />
        <Route path='*' element={<Navigate to='/weather-forecast/404' />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
