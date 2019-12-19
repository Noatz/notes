import React from 'react';
import { MainNav, Header, Hr, CardButton } from './styles.js'

const SideNav = ({noteTitles, changeCurrentNote, addNote}) => {
  return (
    <MainNav>
      <Header>Notes App v0</Header>
      <Hr/>
      <CardButton style={{fontWeight: '800', textDecoration: 'underline'}} onClick={addNote}>Add a new note</CardButton>
      {noteTitles.map((title, i) => (
        <CardButton key={i} onClick={e => changeCurrentNote(e, i)}>{title === '' ? '*no title*' : title}</CardButton>
      ))}
    </MainNav>
  );
}

export default SideNav;