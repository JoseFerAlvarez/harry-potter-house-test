import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import housesReducer from '../features/housesSlice';
import counterReducer from "../features/counterSlice";

export const store = configureStore({
  reducer: {
    houses: housesReducer,
    counter: counterReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
