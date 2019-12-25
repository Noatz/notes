import React from 'react';
import { MainNav, Hr, AddButton, NoteButton, DeleteButton } from './styles.js';

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
            <DeleteButton
              i={selectedNoteIndex === i}
              onClick={e => deleteNote(e, i)}>
              Delete
            </DeleteButton>
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