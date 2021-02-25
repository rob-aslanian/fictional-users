import { combineReducers } from 'redux';
import itemReducer from './item.reducer';
import modalReducer from './modal.reducer';
import userReducer from './user.reducer';

export const rootReducer = combineReducers({
  userReducer,
  itemReducer,
  modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
