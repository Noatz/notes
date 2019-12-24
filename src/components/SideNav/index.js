import React from 'react';
import { MainNav, Hr, AddButton, NoteButton } from './styles.js';

const SideNav = ({noteTitles, changeCurrentNote, addNote}) => {
  return (
    <MainNav>
      <AddButton style={{fontWeight: 800}} onClick={addNote}>
        Add a note
      </AddButton>
      <Hr/>

      {noteTitles.map((title, i) => (
        <NoteButton key={i} onClick={e => changeCurrentNote(e, i)}>
          {title === '' ? '*no title*' : title}
        </NoteButton>
      ))}
    </MainNav>
  );
}

export default SideNav;