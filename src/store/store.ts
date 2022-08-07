import {
  combineReducers,
  configureStore, PreloadedState,
} from '@reduxjs/toolkit';
import citiesReducer from './citiesSlice';

const rootReducer = combineReducers({
  cities: citiesReducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
