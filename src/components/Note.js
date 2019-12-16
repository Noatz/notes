import React from 'react';
import styled from 'styled-components';

const Note = ({note, handleChangeTitle, handleChangeBody}) => {
  return (
    <Div>
      <InputTitle type='text' placeholder='Your note title...' value={note.title} onChange={handleChangeTitle}/>
      <TextArea placeholder='Your note information...' value={note.body} onChange={handleChangeBody}/>
    </Div>
  );
}

const Div = styled.div`
  text-align: center;
  margin: 2%;
  padding: 1%;
  width: 100%;
`;

const InputTitle = styled.input`
  border: none;
  width: 95%;
  padding: 1%;
  font-size: 3em;
  outline: none;
  border-bottom-style: solid;
  border-bottom-color: black;
`;

const TextArea = styled.textarea`
  border: 0;
  width: 95%;
  margin: 1%;
  padding: 1%;
  font-size: 1em;
  outline: none;
  resize: none;
  height: 75%;
`;

export default Note;