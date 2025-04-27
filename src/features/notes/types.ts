export interface Note {
  id: string;
  title: string;
  content: string;
  created_at: string;
  user_id?: string;
}

export interface NoteState {
  notes: Note[];
  loading: boolean;
  error: string | null;
}

export interface CreateNoteDTO {
  title: string;
  content: string;
} 