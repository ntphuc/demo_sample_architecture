import { combineReducers } from '@reduxjs/toolkit';
import noteReducer from '../features/notes/noteSlice';

const rootReducer = combineReducers({
  notes: noteReducer,
});

export default rootReducer; 