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
        <Route index element={<HomePage />} />
        <Route path='/city/:cityId' element={<CityPage />} />
        <Route path='/404' element={<NotFoundPage />} />
        <Route path='*' element={<Navigate to='/404' />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
