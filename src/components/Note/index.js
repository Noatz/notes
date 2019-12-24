import React from 'react';
import { Editor, RichUtils } from 'draft-js';
import './draft.css';
import {
  MainDiv,
  InputTitle,
  BlockButtonDiv,
  DropDownDiv,
  DropDownButton,
  DropDownContent
} from './styles'

const Note = ({note, handleChangeTitle, handleChangeBody}) => {
  const onToggle = blockType => {
    handleChangeBody(RichUtils.toggleBlockType(note.body, blockType));
  }

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      handleChangeBody(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  return (
    <MainDiv>
      <InputTitle type='text' placeholder='Your note title...'
        value={note.title}
        onChange={handleChangeTitle}/>

      <BlockStyleControls onToggle={onToggle}/>
      <Editor style={{color: 'red'}}
        editorState={note.body}
        handleKeyCommand={handleKeyCommand}
        onChange={handleChangeBody}
        placeholder='Your note information...'/>
    </MainDiv>
  );
}

const BlockStyleControls = ({onToggle}) => {
  const HEADERS = [
    {label: 'H1', style: 'header-one'},
    {label: 'H2', style: 'header-two'},
    {label: 'H3', style: 'header-three'},
    {label: 'H4', style: 'header-four'},
  ];
  const LISTS = [
    {label: 'UL', style: 'unordered-list-item'},
    {label: 'OL', style: 'ordered-list-item'},
  ];
  const OTHER = [
    {label: 'Blockquote', style: 'blockquote'},
    {label: 'Code Block', style: 'code-block'},
  ];

  const onClick = (e, style) => {
    e.preventDefault();
    onToggle(style);
  }

  return (
    <BlockButtonDiv>
      <DropDownDiv>
        <DropDownButton>Headings</DropDownButton>
        <DropDownContent>
          {HEADERS.map(header =>
            <DropDownButton key={header.label} onClick={e => onClick(e, header.style)}>
              {header.label}
            </DropDownButton>
          )}
        </DropDownContent>
      </DropDownDiv>

      <DropDownDiv>
        <DropDownButton>Lists</DropDownButton>
        <DropDownContent>
          {LISTS.map(list =>
            <DropDownButton key={list.label} onClick={e => onClick(e, list.style)}>
              {list.label}
            </DropDownButton>
          )}
        </DropDownContent>
      </DropDownDiv>

      <DropDownDiv>
        <DropDownButton>Other</DropDownButton>
        <DropDownContent>
          {OTHER.map(o =>
            <DropDownButton key={o.label} onClick={e => onClick(e, o.style)}>
              {o.label}
            </DropDownButton>
          )}
        </DropDownContent>
      </DropDownDiv>
    </BlockButtonDiv>
  );
}

export default Note;