import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input } from 'react-native-elements';
import { fetchNotes, createNote, deleteNoteById } from '../../redux/noteSlice';
import { RootState, AppDispatch } from '../../redux/store';
import NoteCard from './NoteCard';
import Loading from '../../components/Loading';

export default function NoteScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const { notes, loading, error } = useSelector((state: RootState) => state.notes);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  const handleAddNote = () => {
    if (title.trim() && content.trim()) {
      dispatch(createNote({ title, content }));
      setTitle('');
      setContent('');
    }
  };

  const handleDeleteNote = (id: string) => {
    dispatch(deleteNoteById(id));
  };

  if (loading) return <Loading />;

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />
        <Input
          placeholder="Content"
          value={content}
          onChangeText={setContent}
          multiline
        />
        <Button
          title="Add Note"
          onPress={handleAddNote}
          disabled={!title.trim() || !content.trim()}
        />
      </View>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NoteCard
            title={item.title}
            content={item.content}
            onDelete={() => handleDeleteNote(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
}); 