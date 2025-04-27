import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Note, NoteState, CreateNoteDTO } from '../features/notes/types';
import * as noteService from '../services/noteService';

const initialState: NoteState = {
  notes: [],
  loading: false,
  error: null,
};

export const fetchNotes = createAsyncThunk(
  'notes/fetchNotes',
  async (_, { rejectWithValue }) => {
    try {
      return await noteService.fetchNotes();
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const createNote = createAsyncThunk(
  'notes/createNote',
  async (note: CreateNoteDTO, { rejectWithValue }) => {
    try {
      console.log('Creating note:', note);
      return await noteService.addNote(note);
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const deleteNoteById = createAsyncThunk(
  'notes/deleteNote',
  async (id: string, { rejectWithValue }) => {
    try {
      await noteService.deleteNote(id);
      return id;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.loading = false;
        state.notes = action.payload;
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(createNote.fulfilled, (state, action) => {
        state.notes.push(action.payload);
      })
      .addCase(deleteNoteById.fulfilled, (state, action) => {
        state.notes = state.notes.filter(note => note.id !== action.payload);
      });
  },
});

export default noteSlice.reducer; 