import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SUPABASE_URL = 'https://vfbysvtbzrpdzsevzvsx.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmYnlzdnRienJwZHpzZXZ6dnN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2Mzc4NDIsImV4cCI6MjA2MDIxMzg0Mn0.N5THLFaLmWCKVVPYMwRy6yA2ej_bVDfVaWK7hrJTJOs';

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
}); 