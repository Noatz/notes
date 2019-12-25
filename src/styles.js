import styled from 'styled-components';

export const DeleteNoteButton = styled.button`
  border: none;
  outline: none;
  overflow: hidden;
  background-color: ${props => props.i && "inherit"};
  :hover {
    background-color: pink;
  }
  :active {
    background-color: red;
  }
`;