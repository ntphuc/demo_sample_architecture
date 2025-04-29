import noteReducer, { fetchNotes, createNote, deleteNoteById } from '../noteSlice';

const initialState = {
  notes: [],
  loading: false,
  error: null,
};

describe('noteSlice reducer', () => {
  it('should handle initial state', () => {
    expect(noteReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle fetchNotes.pending', () => {
    const action = { type: fetchNotes.pending.type };
    const state = noteReducer(initialState, action);
    expect(state.loading).toBe(true);
    expect(state.error).toBeNull();
  });

  it('should handle fetchNotes.fulfilled', () => {
    const notes = [{ id: '1', title: 'Test', content: 'Content', created_at: '' }];
    const action = { type: fetchNotes.fulfilled.type, payload: notes };
    const state = noteReducer(initialState, action);
    expect(state.notes).toEqual(notes);
    expect(state.loading).toBe(false);
  });

  it('should handle createNote.fulfilled', () => {
    const note = { id: '2', title: 'New', content: 'Note', created_at: '' };
    const action = { type: createNote.fulfilled.type, payload: note };
    const state = noteReducer(initialState, action);
    expect(state.notes).toContainEqual(note);
  });

  it('should handle deleteNoteById.fulfilled', () => {
    const prevState = {
      ...initialState,
      notes: [{ id: '1', title: 'Test', content: 'Content', created_at: '' }],
    };
    const action = { type: deleteNoteById.fulfilled.type, payload: '1' };
    const state = noteReducer(prevState, action);
    expect(state.notes).toHaveLength(0);
  });
}); 