import React from 'react';
import styled from 'styled-components';

const SideNav = ({noteTitles, changeCurrentNote, addNote}) => {
  console.log(noteTitles[0])
  return (
    <Nav>
      <Header>Notes App v0</Header>
      <Hr/>
      <CardButton style={{fontWeight: '800', textDecoration: 'underline'}} onClick={addNote}>Add a new note</CardButton>
      {noteTitles.map((title, i) => (
        <CardButton key={i} onClick={e => changeCurrentNote(e, i)}>{title == '' ? '*no title*' : title}</CardButton>
      ))}
    </Nav>
  );
}

const Nav = styled.nav`
  background-color: #ccc;
  width: 20%;
  height: 100%;
`;

const Header = styled.header`
  text-align: center;
  padding: 4%;
  background-color: grey;
`;

const Hr = styled.hr`
  margin: 0;
  border: none;
  background-color: black;
  height: .3%
`;

const CardButton = styled.button`
  border: none; // resets defaults
  outline: none; // reset defaults when active
  font-size: 20px;
  font-weight: 500;
  background-color: inherit;
  padding: 10%;
  width: 100%;
  :hover {
    background-color: white;
  }
  :active {
    background-color: #29B6F6;
  }
`;

export default SideNav;