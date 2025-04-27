import { combineReducers } from '@reduxjs/toolkit';
import noteReducer from './noteSlice';

const rootReducer = combineReducers({
  notes: noteReducer,
});

export default rootReducer; 