import React, { useState, useEffect } from 'react';
import { EditorState } from 'draft-js';
import SideNav from './SideNav';
import Note from './Note';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(0);

  // temporarily set up data
  useEffect(() => {
    const notes = [
      {title: 'My first note!!', body: EditorState.createEmpty()},
      {title: 'Journal 1', body: EditorState.createEmpty()},
      {title: 'Journal 2', body: EditorState.createEmpty()},
    ];
    setNotes(notes);
    setSelectedNoteIndex(0);
  }, []);

  // change which note is currently open
  const changeCurrentNote = (event, i) => {
    setSelectedNoteIndex(i);
  }

  // add note
  const addNote = (event) => {
    setNotes(prevNote => prevNote.concat([{title: '', body: EditorState.createEmpty()}]));
    // should be "notes.length-1"... but for some reason it takes a bit to update
    setSelectedNoteIndex(notes.length);
  }

  // remove note
  const deleteNote = (event, i) => {
    console.log(i);
    setNotes(prevNote => {
      prevNote.splice(i, 1);
      return [...prevNote];
    });
    setSelectedNoteIndex(Math.max(0, selectedNoteIndex-1));
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
  const handleChangeBody = (editorState) => {
    setNotes(prevNote => {
      prevNote[selectedNoteIndex].body = editorState;
      return [...prevNote];
    });
  }

  return (
    <div style={{display: "flex", height: "100vh"}}>
      <SideNav
        selectedNoteIndex={selectedNoteIndex}
        noteTitles={notes.map(e => e.title)}
        changeCurrentNote={changeCurrentNote}
        addNote={addNote}
        deleteNote={deleteNote}/>
      {notes.length > 0 && (
        <Note
          selectedNoteIndex={selectedNoteIndex}
          note={notes[selectedNoteIndex]}
          handleChangeTitle={handleChangeTitle}
          handleChangeBody={handleChangeBody}
          deleteNote={deleteNote}/>
      )}
    </div>
  );
}

export default App;