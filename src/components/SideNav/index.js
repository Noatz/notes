import React from 'react';
import { MainNav, Hr, AddButton, NoteButton, DeleteNoteButton } from './styles.js';

const SideNav = ({selectedNoteIndex, noteTitles, changeCurrentNote, addNote, deleteNote}) => {
  return (
    <MainNav>
      <AddButton style={{fontWeight: 800}} onClick={addNote}>
        Add a note
      </AddButton>
      <Hr/>

      {noteTitles.map((title, i) => {
        return (
          <div key={i} style={{display: "flex"}}>
            <DeleteNoteButton
              i={selectedNoteIndex === i}
              onClick={e => deleteNote(e, i)}>
              Delete
            </DeleteNoteButton>
            <NoteButton
              i={selectedNoteIndex === i}
              onClick={e => changeCurrentNote(e, i)}>
              {title === '' ? '*no title*' : title}
            </NoteButton>
          </div>
      )})}
    </MainNav>
  );
}

export default SideNav;