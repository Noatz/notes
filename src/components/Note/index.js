import React, { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import './draft.css';
import { MainDiv, InputTitle, BlockButtonDiv, BlockButtons } from './styles'

const Note = ({note, handleChangeTitle, handleChangeBody}) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onToggle = blockType => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  }

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  return (
    <MainDiv>
      <InputTitle type='text' placeholder='Your note title...' value={note.title} onChange={handleChangeTitle}/>

      <BlockStyleControls onToggle={onToggle}/>
      <Editor style={{color: 'red'}}
        editorState={editorState}
        handleKeyCommand={handleKeyCommand}
        onChange={setEditorState}
        placeholder='Your note information...'/>
    </MainDiv>
  );
}

const BlockStyleControls = ({onToggle}) => {
  const BLOCK_TYPES = [
    {label: 'H1', style: 'header-one'},
    {label: 'H2', style: 'header-two'},
    {label: 'H3', style: 'header-three'},
    {label: 'H4', style: 'header-four'},
    {label: 'H5', style: 'header-five'},
    {label: 'H6', style: 'header-six'},
    {label: 'Blockquote', style: 'blockquote'},
    {label: 'UL', style: 'unordered-list-item'},
    {label: 'OL', style: 'ordered-list-item'},
    {label: 'Code Block', style: 'code-block'}
  ];

  const onClick = (e, style) => {
    e.preventDefault();
    onToggle(style);
  }

  return (
    <BlockButtonDiv>
      {BLOCK_TYPES.map(type =>
         <BlockButtons key={type.label} onClick={e => onClick(e, type.style)}>
          {type.label}
        </BlockButtons>
      )}
    </BlockButtonDiv>
  );
}

export default Note;