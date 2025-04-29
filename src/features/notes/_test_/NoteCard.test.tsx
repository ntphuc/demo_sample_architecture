import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import NoteCard from '../NoteCard';

describe('NoteCard', () => {
  it('renders title and content', () => {
    const { getByText } = render(
      <NoteCard title="Test" content="Content" onDelete={jest.fn()} />
    );
    expect(getByText('Test')).toBeTruthy();
    expect(getByText('Content')).toBeTruthy();
  });

  it('calls onDelete when delete button is pressed', () => {
    const onDelete = jest.fn();
    const { getByText } = render(
      <NoteCard title="Test" content="Content" onDelete={onDelete} />
    );
    fireEvent.press(getByText('Delete'));
    expect(onDelete).toHaveBeenCalled();
  });
}); 