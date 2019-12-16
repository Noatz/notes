import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SideNav from './SideNav';
import Note from './Note';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(0);

  // temporarily set up data
  useEffect(() => {
    const notes = [
      {title: 'My first note!!', body: 'Some random text'},
      {title: 'Journal 1', body: 'My journal entry'},
      {title: 'Journal 2', body: 'My second journal entry'}
    ];
    setNotes(notes);
    setSelectedNoteIndex(0);
  }, []);

  // change which note is currently open
  const changeCurrentNote = (event, i) => {
    setSelectedNoteIndex(i);
  }

  // add notes
  const addNote = (event) => {
    setNotes(prevNote => prevNote.concat([{title: '*new note*', body: ''}]));
    // should be "notes.length-1"... but for some reason it takes a bit to update
    setSelectedNoteIndex(notes.length);
  }

  // update data with new title
  const handleChangeTitle = (event) => {
    const titleValue = event.target.value;
    setNotes(prevNote => {
      prevNote[selectedNoteIndex].title = titleValue;
      return [...prevNote];
    });
  }

  // update data with new body
  const handleChangeBody = (event) => {
    const bodyValue = event.target.value;
    setNotes(prevNote => {
      prevNote[selectedNoteIndex].body = bodyValue;
      return [...prevNote];
    });
  }

  return (
    <Div>
      <SideNav noteTitles={notes.map(e => e.title)} changeCurrentNote={changeCurrentNote} addNote={addNote}/>
      {notes.length > 0 && (
        <Note note={notes[selectedNoteIndex]} handleChangeTitle={handleChangeTitle} handleChangeBody={handleChangeBody}/>
      )}
    </Div>
  );
}

const Div = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  height: 100vh;
`;

export default App;