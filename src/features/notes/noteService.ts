import { supabaseClient } from '../../services/supabaseClient';

export const fetchNotes = async () => {
  const { data, error } = await supabaseClient.from('notes').select('*');
  if (error) throw error;
  return data;
};

export const addNote = async (note: { title: string; content: string }) => {
  const { data, error } = await supabaseClient
    .from('notes')
    .insert([note])
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const deleteNote = async (id: string) => {
  const { error } = await supabaseClient.from('notes').delete().eq('id', id);
  if (error) throw error;
}; 