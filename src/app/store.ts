import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import housesReducer from '../features/housesSlice';
import counterReducer from "../features/counterSlice";
import answersReducer from "../features/answersSlice";
import userReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    houses: housesReducer,
    counter: counterReducer,
    answers: answersReducer,
    user: userReducer
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
