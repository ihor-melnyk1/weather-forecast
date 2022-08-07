import React, { FC, useState } from 'react';
import { Button, TextField } from '@mui/material';

import { CustomForm } from './CityInput.styled';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addCityWeatherByName } from '../../store/citiesSlice';

const CityInput: FC = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const cities = useAppSelector(
    (state) => state.cities.cities,
  );
  const stateError = useAppSelector(
    (state) => state.cities.cityInputError,
  );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const onFormSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (cities.find((city) => city.name.toLowerCase() === name.toLowerCase())) {
      setError('this city has already been added');
    } else {
      setError(null);
      dispatch(addCityWeatherByName(name));
    }
  };
  return (
    <CustomForm
      component='form'
      onSubmit={onFormSubmit}
    >
      <TextField
        error={Boolean(error) || Boolean(stateError)}
        id='city-input'
        label='add city'
        placeholder='City name...'
        value={name}
        onChange={handleChange}
        helperText={error || stateError}
        autoComplete='off'
      />
      <Button sx={{ height: '56px' }} variant='contained' type='submit'>
        Submit
      </Button>
    </CustomForm>
  );
};

export default CityInput;
