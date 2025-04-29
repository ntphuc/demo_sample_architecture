import * as noteService from '../noteService';
import { supabaseClient } from '../../../services/supabaseClient';

jest.mock('../../services/supabaseClient', () => ({
  supabaseClient: {
    from: jest.fn().mockReturnThis(),
    select: jest.fn(),
    insert: jest.fn().mockReturnThis(),
    delete: jest.fn().mockReturnThis(),
    eq: jest.fn().mockReturnThis(),
    single: jest.fn(),
  },
}));

describe('noteService', () => {
  it('fetchNotes returns data', async () => {
    (supabaseClient.select as jest.Mock).mockResolvedValue({ data: [{ id: '1', title: 'A', content: 'B' }], error: null });
    const data = await noteService.fetchNotes();
    expect(data).toEqual([{ id: '1', title: 'A', content: 'B' }]);
  });

  it('addNote returns new note', async () => {
    (supabaseClient.insert as jest.Mock).mockReturnThis();
    (supabaseClient.select as jest.Mock).mockReturnThis();
    (supabaseClient.single as jest.Mock).mockResolvedValue({ data: { id: '2', title: 'C', content: 'D' }, error: null });
    const data = await noteService.addNote({ title: 'C', content: 'D' });
    expect(data).toEqual({ id: '2', title: 'C', content: 'D' });
  });

  it('deleteNote does not throw error', async () => {
    (supabaseClient.delete as jest.Mock).mockReturnThis();
    (supabaseClient.eq as jest.Mock).mockResolvedValue({ error: null });
    await expect(noteService.deleteNote('1')).resolves.toBeUndefined();
  });
}); 