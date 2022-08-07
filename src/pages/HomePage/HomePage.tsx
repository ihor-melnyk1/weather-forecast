import { FC } from 'react';
import { useAppSelector } from '../../store/hooks';

import CityCard from '../../components/CityCard/CityCard';
import CityInput from '../../components/CityInput/CityInput';

import { CustomList } from './HomePage.styled';

const HomePage: FC = () => {
  const cities = useAppSelector((state) => state.cities.cities);
  return (
    <main>
      <CityInput />
      <CustomList>
        {cities.map((city) => <CityCard key={city.id} city={city} />)}
      </CustomList>
    </main>
  );
};

export default HomePage;
